import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import $ from 'jquery';
import {DriverModel} from '../../../../core/model/driver.model';
import {VehicleService} from '../../../../core/services/vehicle.service';
import {Router} from '@angular/router';

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

  options = [{key: 'default', value: '- Pièce  d\'identité -'}, {key: 'Passport', value: 'Passport'}, {
    key: 'Carte d\'electeur',
    value: 'Carte d\'electeur'
  }];

  drivers = [];
  countDriver = 0;
  errorMsg = '';
  headers = ['Prénom', 'Nom', 'Téléphone', 'Pièce d\'identité. ID', 'Adresse', 'N° Permis', 'Date d\expiration du permis'];

  constructor(private formBuilder: FormBuilder, private router: Router, private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        brand: ['', Validators.required],
        modele: ['', Validators.required],
        idNumber: ['', Validators.required],
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        address: ['', Validators.required],
        identityId: ['', Validators.required],
        typeCarte: ['', Validators.required],
        insurance: [''],
        voletJaune: [''],
        carteRose: [''],
      });
  }

  onAddDriver(data) {
    this.countDriver = this.countDriver + 1;
    const driver: any = {
      id: this.countDriver,
      name: data.name,
      lastname: data.lastname,
      phoneNumber: data.phoneNumber,
      identityId: data.typeCarte + '/' + data.identityId,
      address: data.address,
      licenceNumber: data.licenceNumber,
      expireDateLicenceNumber: data.expireDateLicenceNumber
    };

    this.drivers.push(driver);
    this.display = 'none';
  }

  onRemoveDriver(id) {
    console.log(id);
    const newData = this.drivers.filter((data) => {
      return data.id !== id;
    });

    console.log(newData);
    this.drivers = newData;
    console.log(this.drivers);
  }

  onCreateVehicle(el) {
    this.loginBtn = el;

    this.errorMsg = '';
    const status = this.formGroup.status;

    if (status === 'VALID') {
      this.loading(true);

      const data = this.formGroup.value;

      const dataVehicle = {
        brand: data.brand,
        modele: data.modele,
        idNumber: data.idNumber,
        insuranceId: data.insurance,
        voletJauneId: data.voletJaune,
        carteRoseId: data.carteRose,
        proprietaire: {
          name: data.name,
          lastname: data.lastname,
          phoneNumber: data.phoneNumber,
          address: data.address,
          identityId: data.typeCarte + '/' + data.identityId
        },
        chauffeurs: this.drivers
      };

      console.log(dataVehicle);
      this.vehicleService.add(dataVehicle).subscribe(httpResponse => {
        this.loading(false);
        console.log(httpResponse);
        if (httpResponse.code === '200') {
          this.router.navigate(['main/vehicle']);
        } else {
          this.errorMsg = httpResponse.message;
        }
      });
    } else {
      this.errorMsg = 'Veuillez renseigner tout les champs';
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
