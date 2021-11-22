import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import $ from 'jquery';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css'],
})
export class UserEditFormComponent implements OnInit {
  formGroup: FormGroup;
  @Input() display = 'none';
  errorMsg = '';
  username = '';
  user: any;

  @Input() eventValidate: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      opassword: ['', Validators.required],
      npassword: ['', Validators.required],
    });
    this.sharedService.getUserProfil().subscribe((user) => {
      this.user = user;
      this.username = user.username;
    });
  }

  onClose() {}

  btnValid: any;
  onValidate(btn) {
    this.btnValid = btn;
    console.log(btn);

    const status = this.formGroup.status;
    console.log(this.formGroup.value);

    if (status === 'VALID') {
      if (this.user.username === this.formGroup.value.opassword) {
        this.loadingSaveBtn(true);
        this.user.username = this.formGroup.value.opassword;
        this.userService.update(this.user).subscribe((data) => {
          this.loadingSaveBtn(false);
          if (data.code === '200') {
            this.eventValidate.emit();
          }
        });
      } else {
        this.errorMsg = 'Votre ancien mot de passe est incorrect';
      }
    } else {
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
}
