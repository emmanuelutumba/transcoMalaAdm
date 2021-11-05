import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {VehicleService} from '../../../../../../core/services/vehicle.service';
import {SharedService} from '../../../../../../shared/services/shared.service';
import $ from 'jquery';

@Component({
  selector: 'app-vehicule-form-edit',
  templateUrl: './vehicule-form-edit.component.html',
  styleUrls: ['./vehicule-form-edit.component.css']
})
export class VehiculeFormEditComponent implements OnInit {

  @Input() displayMeForm = 'none';
  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventSave: EventEmitter<any> = new EventEmitter<any>();
  @Input() vehicleSelected;

  formGroup: FormGroup;
  btn: any;

  options = [{key: 'default', value: '- Pièce  d\'identité -'}, {key: 'Passport', value: 'Passport'}, {
    key: 'Carte d\'electeur',
    value: 'Carte d\'electeur'
  }];

  errorMsg = '';
  headers = ['Prénom', 'Nom', 'Téléphone', 'Pièce d\'identité. ID', 'Adresse', 'N° Permis', 'Date d\expiration du permis'];


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private vehicleService: VehicleService,
              private sharedService: SharedService) {

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        brand: ['', Validators.required],
        modele: ['', Validators.required],
        idNumber: ['', Validators.required],
        insuranceId: [''],
        voletJauneId: [''],
        carteRoseId: [''],
      });
    this.sharedService.getVehicle().subscribe(data => {
      console.log(data);
      this.vehicleSelected = data;
      this.formGroup.patchValue(data);
    });
  }

  onUpdate(el) {
    this.btn = el;

    const status = this.formGroup.status;
    if (status === 'VALID') {

      const vehicleUpdatedData = this.formGroup.value;
      vehicleUpdatedData.id = this.vehicleSelected.id;
      vehicleUpdatedData.createdAt = this.vehicleSelected.createdAt;
      vehicleUpdatedData.proprietaire = this.vehicleSelected.proprietaire;
      console.log(vehicleUpdatedData);

      this.loadingSaveBtn(true);
      this.vehicleService.update(vehicleUpdatedData).subscribe(data => {
        this.loadingSaveBtn(false);
        console.log(data);
        if (data.code === '200') {
          this.eventSave.emit();
        }
      });
    }
  }

  closeMe() {
    this.eventClose.emit();
  }

  onKeyUp() {
    const newData = this.formGroup.value;
    const btnEdit = $('.vehicule-form-edit').find('#btn-edit-vehcle');

    if (newData.brand !== this.vehicleSelected.brand ||
      newData.modele !== this.vehicleSelected.modele ||
      newData.idNumber !== this.vehicleSelected.idNumber ||
      newData.insuranceId !== this.vehicleSelected.insuranceId ||
      newData.carteRoseId !== this.vehicleSelected.carteRoseId ||
      newData.voletJauneId !== this.vehicleSelected.voletJauneId) {
      btnEdit.attr('disabled', false);
    } else {
      btnEdit.attr('disabled', true);
    }
  }

  loadingSaveBtn(load: boolean) {
    const btn = $(this.btn);
    if (load) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', '');
    }
  }

}
