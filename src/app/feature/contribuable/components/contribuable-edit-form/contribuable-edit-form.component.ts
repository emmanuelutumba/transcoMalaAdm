import {Component, OnInit} from '@angular/core';
import {ContribuableService} from '../../../../core/services/contribuable.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import $ from 'jquery';

@Component({
  selector: 'app-contribuable-edit-form',
  templateUrl: './contribuable-edit-form.component.html',
  styleUrls: ['./contribuable-edit-form.component.css']
})
export class ContribuableEditFormComponent implements OnInit {

  formGroup: FormGroup;
  identityOptions = [{key: 'Carte d\'electeur', value: 'Carte d\'electeur'}, {key: 'Passport', value: 'Passport'}];
  isLoading = true;
  contribuableData: any;
  errorMsg = '';
  defaultSelectId = '';
  editBtn: any;

  lastname = '';
  name = '';
  activationCode = '';
  phoneNumber = '';
  address = '';
  identityId = '';
  typeCarte = '';
  isDisableBtnEdit = true;

  constructor(private contribuableService: ContribuableService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    $('.contribuable-edit-form').find('.btn-edit-contribuable').attr('disabled', 'disabled');

    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      identityId: ['', Validators.required],
      typeCarte: ['', Validators.required]
    });

    // tslint:disable-next-line:radix
    const targetId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(targetId);
    this.contribuableService.getById(targetId).subscribe(data => {
        this.isLoading = false;
        if (data.code === '200') {
          if (data.profil !== undefined) {
            this.activationCode = data.profil.activationCode;
          }
          this.contribuableData = data.data[0];
          this.lastname = this.contribuableData.lastname;
          this.name = this.contribuableData.name;
          this.phoneNumber = this.contribuableData.phoneNumber;
          this.address = this.contribuableData.address;

          this.defaultSelectId = this.contribuableData.identityId.split('/')[0];
          this.identityId = this.contribuableData.identityId.split('/')[1];
          console.log(this.typeCarte);

          this.initForm(this.contribuableData);
        } else {

        }
      }
    )
    ;
  }

  initForm(data) {
    this.formGroup.patchValue({
      name: data.name,
      lastname: data.lastname,
      phoneNumber: data.phoneNumber,
      address: data.address,
      identityId: this.identityId,
      typeCarte: this.defaultSelectId
    });
  }


  onEditContribuable(el) {
    this.editBtn = el;
    const status = this.formGroup.status;
    const newData = this.formGroup.value;
    if (status === 'VALID') {
      this.loadingSaveBtn(true);
      this.contribuableData.name = newData.name;
      this.contribuableData.lastname = newData.lastname;
      this.contribuableData.phoneNumber = newData.phoneNumber;
      this.contribuableData.identityId = newData.name.typeCarte + '/' + newData.name.identityId;
      this.contribuableData.address = newData.name;
      this.contribuableService.update(this.contribuableData).subscribe(data => {
        this.loadingSaveBtn(false);
        if (data.code === '200') {
          this.router.navigate(['main/contribuable']);
        } else {
          this.errorMsg = data.message;
        }
      });
    }
  }

  loadingSaveBtn(load: boolean) {
    const btn = $(this.editBtn);
    if (load) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', '');
    }
  }

  onDataChanged() {
    console.log('new change: ', this.formGroup.value);
    console.log('status: ', this.formGroup.status);

    const newData = this.formGroup.value;

    if (newData.lastname !== this.lastname ||
      newData.name !== this.name ||
      newData.phoneNumber !== this.phoneNumber ||
      newData.address !== this.address ||
      newData.identityId !== this.identityId ||
      newData.typeCarte !== this.defaultSelectId) {
      console.log('ya difference');
      this.isDisableBtnEdit = false;
    } else {
      console.log('ya pas difference');
      this.isDisableBtnEdit = true;
    }

  }

}
