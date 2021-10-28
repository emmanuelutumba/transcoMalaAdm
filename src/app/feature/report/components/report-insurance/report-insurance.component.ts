import {Component, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-report-insurance',
  templateUrl: './report-insurance.component.html',
  styleUrls: ['./report-insurance.component.css']
})
export class ReportInsuranceComponent implements OnInit {

  options = [
    {
      id: '1', value: 'Détail'
    },
    {
      id: '2', value: 'Supprimer'
    },
    {
      id: '3', value: 'Paiement'
    }
  ];

  headers = [
    'N° Réf. Assurance',
    'Numéro de plaque',
    'Marque', 'Modèle', 'Montant Paye', 'Statut'
  ];

  datas = [];


  constructor() {
  }

  ngOnInit(): void {
    this.datas = [
      {
        id: 1, refAssurance: 'AS565667', numeroPlaque: 'KN5665', marque: 'TOYOTA', modele: 'IST', montantPaye: 45556.3, status: 'PAYE'
      }, {
        id: 2, refAssurance: 'AS565667', numeroPlaque: 'KN56675', marque: 'TOYOTA', modele: 'IST', montantPaye: 45556.3, status: 'PAYE'
      }, {
        id: 3, refAssurance: 'AS565667', numeroPlaque: 'KN565', marque: 'TOYOTA', modele: 'IST', montantPaye: 45556.3, status: 'PAYE'
      }, {
        id: 4, refAssurance: 'AS565667', numeroPlaque: 'KN5665', marque: 'TOYOTA', modele: 'IST', montantPaye: 45556.3, status: 'PAYE'
      }, {
        id: 5, refAssurance: 'AS565667', numeroPlaque: 'KN564365', marque: 'TOYOTA', modele: 'IST', montantPaye: 45556.3, status: 'PAYE'
      }, {
        id: 6, refAssurance: 'AS565667', numeroPlaque: 'KN095665', marque: 'TOYOTA', modele: 'IST', montantPaye: 45556.3, status: 'PAYE'
      }, {
        id: 7, refAssurance: 'AS565667', numeroPlaque: 'KN195665', marque: 'TOYOTA', modele: 'IST', montantPaye: 45556.3, status: 'PAYE'
      }, {
        id: 8, refAssurance: 'AS565667', numeroPlaque: 'KN13425665', marque: 'TOYOTA', modele: 'IST', montantPaye: 45556.3, status: 'PAYE'
      }, {
        id: 9, refAssurance: 'AS565667', numeroPlaque: 'KN56562165', marque: 'TOYOTA', modele: 'IST', montantPaye: 45556.3, status: 'PAYE'
      }, {
        id: 10, refAssurance: 'AS565667', numeroPlaque: 'KN56603285', marque: 'TOYOTA', modele: 'IST', montantPaye: 45556.3, status: 'PAYE'
      }
    ];
  }

  onSearch(el) {
    const val = $(el.target).val();
    console.log(val);

    const dataFiltered = this.datas.filter((data) => {
      return data.numeroPlaque.toString().includes(val);
    });
    if (dataFiltered.length > 0) {
      this.datas = dataFiltered;
    }
  }
}
