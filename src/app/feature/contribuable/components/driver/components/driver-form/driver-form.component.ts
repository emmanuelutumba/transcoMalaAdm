import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChauffeurService} from '../../../../../../core/services/chauffeur.service';
import $ from 'jquery';

@Component({
  selector: 'app-driver-form-d',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {
  @Input() display = 'none';
  formGroup: FormGroup;

  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventSave: EventEmitter<any> = new EventEmitter<any>();
  options = [{key: 'Passport', value: 'Passport'}, {
    key: 'Carte d\'electeur',
    value: 'Carte d\'electeur'
  }];

  errorMsg = '';
  @Input() contribuable: any;

  constructor(private formBuilder: FormBuilder, private driverService: ChauffeurService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      identityId: ['', Validators.required],
      typeCarte: ['', Validators.required],
      licenceNumber: ['', Validators.required],
      expireDateLicenceNumber: ['', Validators.required]
    });
  }

  onSave() {
    this.errorMsg = '';

    const status = this.formGroup.status;
    const driver = this.formGroup.value;
    if (status === 'VALID') {
      this.loading(true);
      driver.identityId = this.formGroup.value.typeCarte + '/' + this.formGroup.value.identityId;
      driver.proprietaire = {};
      driver.proprietaire.id = this.contribuable.id;
      this.driverService.save(driver).subscribe(data => {
        this.loading(false);
        this.display = 'none';
        console.log(data);
        if (data.code === '200') {
          this.formGroup.reset();
          this.eventSave.emit();
        } else {
          this.errorMsg = data.message;
        }
      });
    } else {
      this.errorMsg = 'Veuillez renseigner tout les champs';
    }
  }

  loading(bool: boolean) {
    const btn = $('.driver-form-d').find('#driver-form-add');
    if (bool) {
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
