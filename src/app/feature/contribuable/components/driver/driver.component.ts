import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  headers = [
    'Nom', 'Prénom', 'ID. Pièce d\'identité', 'Résidence', 'Véhicule affecté'
  ];
  drivers = [];

  options = [
    {
      id: '1', value: 'Nouveau chauffeur'
    },
    {
      id: '2', value: 'Supprimer'
    },
    {
      id: '3', value: 'Editer'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onOptionSelected(el) {

  }
}
