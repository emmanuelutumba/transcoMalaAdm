import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-taxe',
  templateUrl: './taxe.component.html',
  styleUrls: ['./taxe.component.css']
})
export class TaxeComponent implements OnInit {

  headers = [
    'Véhicule', 'Taxe', 'Montant payé', 'Montant restant', 'Status'
  ];
  taxes = [];

  options = [{
    id: '1', value: 'Payé'
  }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onOptionSelected(el) {

  }
}
