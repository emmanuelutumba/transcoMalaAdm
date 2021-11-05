import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../../../../../shared/services/shared.service';
import $ from 'jquery';
import {ChauffeurService} from '../../../../../../core/services/chauffeur.service';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.css']
})
export class DriverEditComponent implements OnInit {


  @Input() display = 'none';
  formGroup: FormGroup;

  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventSave: EventEmitter<any> = new EventEmitter<any>();
  options = [{key: 'Passport', value: 'Passport'}, {
    key: 'Carte d\'electeur',
    value: 'Carte d\'electeur'
  }];

  errorMsg = '';
  driver: any;
  selectedIdCard = '';

  constructor(private formBuilder: FormBuilder,
              private sharedService: SharedService,
              private driverService: ChauffeurService) {
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
    this.sharedService.getDriver().subscribe(data => {
      console.log('driver', data);
      this.driver = data;
      this.driver.typeCarte = data.identityId.split('/')[0];
      this.selectedIdCard = data.identityId.split('/')[0];
      this.formGroup.patchValue(this.driver);
    });
  }

  onClose() {
    this.eventClose.emit();
  }

  onUpdate() {
    const status = this.formGroup.status;

    this.loading(true);
    if (status === 'VALID') {
      const newDriver = this.formGroup.value;
      newDriver.id = this.driver.id;
      newDriver.proprietaire = this.driver.proprietaire;
      this.driverService.update(newDriver).subscribe(data => {
        this.loading(false);
        console.log(data);
        if (data.code === '200') {
          this.eventSave.emit();
        }
      });
    }
  }

  loading(bool: boolean) {
    const btn = $('.driver-edit').find('#driver-form-edit-btn');
    if (bool) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', '');
    }
  }
}
