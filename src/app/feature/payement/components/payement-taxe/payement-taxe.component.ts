import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-payement-taxe',
  templateUrl: './payement-taxe.component.html',
  styleUrls: ['./payement-taxe.component.css']
})
export class PayementTaxeComponent implements OnInit {

  formGroup: FormGroup;
  reasons = [{key: '-- Objet --', value: '-- Objet --'}, {key: 'Taxe', value: 'Taxe'}, {key: 'Contravention', value: 'Contravention'}];
  types = [];

  headers = [
    'Véhicule', 'N° d\'immatriculation', 'Taxe', 'Montant payé', 'Montant restant', 'Status'
  ];
  taxes = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        idNumber: ['', Validators.required],
        reason: ['', Validators.required],
        typeReason: ['', Validators.required],
        montant: ['', Validators.required]
      });
  }

  onSearch(el) {

  }
}
