import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import $ from 'jquery';
import {DriverModel} from '../../../../core/model/driver.model';

@Component({
  selector: 'app-add-vehicle-dialog',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  @Input() display = 'none';
  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();

  formGroup: FormGroup;
  loginBtn: any;

  drivers = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        marque: ['', Validators.required],
        modele: ['', Validators.required],
        idNumber: ['', Validators.required],
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        address: ['', Validators.required],
        insurance: ['', Validators.required],
        voletJaune: ['', Validators.required],
        carteRose: ['', Validators.required],
        identityId: ['', Validators.required]
      });
  }

  onAddDriver(data) {
    const driver: any = {
      name: data.name,
      lastname: data.lastname,
      phoneNumber: data.phoneNumber,
      identityId: data.typeCarte + '/' + data.identityId,
      address: data.address,
    };

    console.log(driver);

    this.drivers.push(driver);
    this.display = 'none';

    const keys = Object.keys(driver);
    const values = Object.values(driver);
    console.log(keys);
    console.log(values);
  }

  onCreateVehicle(el) {
    this.loginBtn = el;
    console.log(el);
    const status = this.formGroup.status;

    if (status === 'VALID') {
      this.loading(true);
      const dataVehicle = this.formGroup.value;
      console.log(dataVehicle);
    }
  }

  loading(load: boolean) {
    const btn = $(this.loginBtn);
    if (load) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', '');
    }
  }

  onOpenFormDriver() {
    this.display = 'block';
  }

  onCloseFormDriver() {
    this.display = 'none';
    this.eventClose.emit();
  }
}
