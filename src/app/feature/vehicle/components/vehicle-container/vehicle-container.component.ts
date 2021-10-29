import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vehicle-container',
  templateUrl: './vehicle-container.component.html',
  styleUrls: ['./vehicle-container.component.css']
})
export class VehicleContainerComponent implements OnInit {

  headers = [
    'Marque', 'Modèle', 'Numéro de plaque'
  ];
  vehicules = [];

  options = [
    {
      id: '1', value: 'Nouveau véhicule'
    },
    {
      id: '2', value: 'Détail'
    },
    {
      id: '3', value: 'Supprimer'
    },
    {
      id: '4', value: 'Editer'
    }
  ];

  displayForm = 'none';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.vehicules = [
      {
        id: 1, marque: 'TOYOTA', modele: 'IST', numeroPlaque: 'KN5665'
      }, {
        id: 2, marque: 'TOYOTA', modele: 'IST', numeroPlaque: 'KN56675'
      }, {
        id: 3, marque: 'TOYOTA', modele: 'IST', numeroPlaque: 'KN565'
      }, {
        id: 4, marque: 'TOYOTA', modele: 'IST', numeroPlaque: 'KN5665'
      }, {
        id: 5, marque: 'TOYOTA', modele: 'IST', numeroPlaque: 'KN564365'
      }, {
        id: 6, marque: 'TOYOTA', modele: 'IST', numeroPlaque: 'KN095665'
      }, {
        id: 7, marque: 'TOYOTA', modele: 'IST', numeroPlaque: 'KN195665'
      }, {
        id: 8, numeroPlaque: 'KN13425665', marque: 'TOYOTA', modele: 'IST'
      }, {
        id: 9, marque: 'TOYOTA', modele: 'IST', numeroPlaque: 'KN56562165'
      }, {
        id: 10, marque: 'TOYOTA', modele: 'IST', numeroPlaque: 'KN56603285'
      }
    ];
  }

  onOptionSelected(id) {
    console.log(id === '1');
    if (id === '1') {
      this.router.navigate(['main/vehicle/add']);
    }
  }

  closeForm() {
    this.displayForm = 'none';
  }

}
