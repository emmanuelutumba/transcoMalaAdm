import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { ContraventionService } from 'src/app/core/services/contravention.service';
@Component({
  selector: 'app-report-contravention',
  templateUrl: './report-contravention.component.html',
  styleUrls: ['./report-contravention.component.css'],
})
export class ReportContraventionComponent implements OnInit {
  options = [];

  headers = [
    'Véhicule',
    "N° d'immatriculation",
    'Taxe',
    'Montant payé',
    'Montant restant',
    'Statut',
  ];

  datas = [];
  contraventionsData: any;

  isTableLoading = false;

  constructor(private contraventionService: ContraventionService) {}

  ngOnInit(): void {
    this.isTableLoading = true;
    this.contraventionService.getAllList().subscribe((data) => {
      this.isTableLoading = false;
      if (data.code === '200') {
        console.log(data.data);
        this.contraventionsData = data.data;

        this.datas = data.data.map((i) => {
          return {
            id: i.id,
            description: i.vehicule.brand + ' ' + i.vehicule.modele,
            idNumber: i.vehicule.idNumber,
            taxe: i.infraction.denomination,
            amountPaid: i.paidAmount + ' ' + i.infraction.devise,
            remainAmount: i.remainAmout + ' ' + i.infraction.devise,
            status: i.status,
          };
        });
      }
    });
  }

  onSearch(el) {
    const val = $(el.target).val();
    console.log(val);

    const dataFiltered = this.contraventionsData.filter((data) => {
      return data.vehicule.idNumber.toString().includes(val);
    });
    if (dataFiltered.length > 0) {
      this.datas = dataFiltered.map((i) => {
        return {
          id: i.id,
          description: i.vehicule.brand + ' ' + i.vehicule.modele,
          idNumber: i.vehicule.idNumber,
          taxe: i.infraction.denomination,
          amountPaid: i.paidAmount + ' ' + i.infraction.devise,
          remainAmount: i.remainAmout + ' ' + i.infraction.devise,
          status: i.status,
        };
      });
    }
  }
}
