import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import $ from 'jquery';
import {VehicleService} from '../../../../../../core/services/vehicle.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  @Input() displayMeForm = 'none';
  @Input() displayDriverForm = 'none';

  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventSave: EventEmitter<any> = new EventEmitter<any>();


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
        insurance: [''],
        voletJaune: [''],
        carteRose: [''],
      });
  }

  onSave() {
    this.errorMsg = '';

    const status = this.formGroup.status;
    console.log(this.formGroup.value);
    console.log(this.formGroup.status);
    if (status === 'VALID') {
      this.formGroup.value.chauffeurs = this.drivers;
      this.eventSave.emit(this.formGroup.value);
      this.formGroup.reset();
      this.drivers = [];
    } else {
      this.errorMsg = 'Veuillez renseigner tout les champs';
    }
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
    this.displayDriverForm = 'none';
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
  }

  onOpenDriverForm() {
    this.displayDriverForm = 'block';
  }

  onCloseDriverForm() {
    this.displayDriverForm = 'none';
  }

  closeMe() {
    this.eventClose.emit();
  }
}
