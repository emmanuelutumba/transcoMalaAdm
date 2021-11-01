import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import $ from 'jquery';
import {ContribuableService} from '../../../../core/services/contribuable.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contribuable-form',
  templateUrl: './contribuable-form.component.html',
  styleUrls: ['./contribuable-form.component.css']
})
export class ContribuableFormComponent implements OnInit {
  formGroup: FormGroup;
  identityOptions = [{key: 'Carte d\'electeur', value: 'Carte d\'electeur'}, {key: 'Passport', value: 'Passport'}];
  headers = ['Marque', 'Modèle', 'Numéro de plaque', 'ID. Assurance', 'ID. Volet jaune', 'ID. Carte rose'];
  vehicles = [];
  vehiculesToSave = [];
  displayVehicleForm = 'none';

  countVehicle = 0;
  errorMsg = '';
  saveBtn: any;

  constructor(private formBuilder: FormBuilder, private constribuableService: ContribuableService, private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      identityId: ['', Validators.required],
      typeCarte: ['', Validators.required]
    });
  }

  onAddVehicle(data) {
    console.log(data);
    this.countVehicle++;
    const vehicule: any = {
      id: this.countVehicle,
      brand: data.brand,
      modele: data.modele,
      idNumber: data.idNumber,
      insurance: data.insurance,
      voletJaune: data.voletJaune,
      carteRose: data.carteRose
    };

    this.vehicles.push(vehicule);
    this.displayVehicleForm = 'none';

    const vehiculeToSave: any = {
      brand: data.brand,
      modele: data.modele,
      idNumber: data.idNumber,
      insuranceId: data.insurance,
      voletJauneId: data.voletJaune,
      carteRoseId: data.carteRose,
      chauffeurs: data.chauffeurs
    };
    this.vehiculesToSave.push(vehiculeToSave);


  }

  onOpenVehicleForm() {
    console.log('opening vehicle form');
    this.displayVehicleForm = 'block';
  }

  onCloseVehicleForm() {
    this.displayVehicleForm = 'none';
  }

  onRemoveSelectedVehicle(id) {
    const newData = this.vehicles.filter((data) => {
      return data.id !== id;
    });
    this.vehicles = newData;

    const newDataToSave = this.vehiculesToSave.filter((data) => {
      return data.id !== id;
    });
    this.vehiculesToSave = newDataToSave;
  }

  onCreateContrible(el) {
    this.saveBtn = el;
    const status = this.formGroup.status;
    console.log(status);

    if (status === 'VALID') {
      if (this.vehicles.length > 0) {
        this.loadingSaveBtn(true);
        const contribuable = this.formGroup.value;
        contribuable.id = null;
        contribuable.vehicules = this.vehiculesToSave;

        console.log(contribuable);

        this.constribuableService.save(contribuable).subscribe((data) => {
          console.log(data);
          this.loadingSaveBtn(false);
          if (data.code === '200') {
            this.router.navigate(['main/contribuable']);
          }
        });

      } else {
        this.errorMsg = 'Veuillez enregistrer au moins un véhicule';
      }
    } else {
      this.errorMsg = 'Veuillez renseigner tout les champs';
    }
  }

  loadingSaveBtn(load: boolean) {
    const btn = $(this.saveBtn);
    if (load) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
      this.hider(true);
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', '');
      this.hider(false);
    }
  }

  hider(bool) {
    if (bool) {
      $('.contribuable-container').find('#add-vehicle').attr('disabled', 'disabled');
    } else {
      $('.contribuable-container').find('#add-vehicle').attr('disabled', false);
    }

  }
}
