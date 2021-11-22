import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'src/app/core/services/role.service';
import { UserService } from 'src/app/core/services/user.service';
import $ from 'jquery';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css'],
})
export class UserAddFormComponent implements OnInit {
  formGroup: FormGroup;
  @Input() display = 'none';
  errorMsg = '';

  roleOptions = [];
  rolesData: any = [];
  roleSelected: any;

  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      usernamee: ['', Validators.required],
      passwordd: ['', Validators.required],
      role: ['', Validators.required],
    });

    this.roleService.loadData().subscribe((data) => {
      this.rolesData = data;
      this.roleOptions = data.map((r) => {
        return {
          key: r.id,
          value: r.description,
        };
      });
    });

    this.roleService.getAll();
  }

  onRoleSelected(el) {
    const id = parseInt($(el).val(), 10);
    console.log(id);
    this.roleSelected = this.rolesData.filter((r) => {
      return r.id === id;
    })[0];
  }

  btnValid: any;
  onValidate(el) {
    this.btnValid = el;
    console.log(el);

    console.log('valid...');

    const status = this.formGroup.status;
    console.log(this.formGroup.value);
    console.log(this.roleSelected);

    if (status === 'VALID') {
      const user:any = {};
      user.username = this.formGroup.value.usernamee;
      user.password = this.formGroup.value.passwordd;
      user.role = this.roleSelected;
      user.typeUtilisateur = {};
      user.typeUtilisateur.id = 1;
      console.log(user);

      this.loadingSaveBtn(true);
      this.userService.save(user).subscribe((data) => {
        this.loadingSaveBtn(false);
        console.log(data);

        if (data.code === '200') {
          this.userService.getAllUsers();
          this.eventClose.emit();
        } else {
          this.errorMsg = data.message;
        }
      });
    }
  }

  loadingSaveBtn(load: boolean) {
    const btn = $(this.btnValid);
    if (load) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', '');
    }
  }
  onClose() {
    this.formGroup.reset();
    this.eventClose.emit();
  }
}
