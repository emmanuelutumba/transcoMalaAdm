import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contribuable-form',
  templateUrl: './contribuable-form.component.html',
  styleUrls: ['./contribuable-form.component.css']
})
export class ContribuableFormComponent implements OnInit {
  formGroup: FormGroup;
  identityOptions = ['Carte d\'electeur', 'Passport'];
  headers = ['Marque', 'Modèle', 'Numéro de plaque', 'ID. Assurance', 'ID. Volet jaune', 'ID. Carte rose'];
  vehicles = [];

  constructor(private formBuilder: FormBuilder) {
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

  onOpenVehicleForm() {

  }

  onRemoveSelectedVehicle(id) {

  }
}
