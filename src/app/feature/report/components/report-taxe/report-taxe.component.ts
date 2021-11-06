import { Component, OnInit } from '@angular/core';
import { TaxeService } from 'src/app/core/services/taxe.service';
import $ from 'jquery';

@Component({
  selector: 'app-report-taxe',
  templateUrl: './report-taxe.component.html',
  styleUrls: ['./report-taxe.component.css'],
})
export class ReportTaxeComponent implements OnInit {
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
  taxesData: any;
  isTableLoading = false;

  constructor(private taxeService: TaxeService) {}

  ngOnInit(): void {
    this.isTableLoading = true;
    this.taxeService.getAllList().subscribe((data) => {
      this.isTableLoading = false;
      if (data.code === '200') {
        console.log(data.data);
        this.taxesData = data.data;

        let i = 0;
        this.datas = data.data.map((t) => {
          return {
            id: i++,
            description: t.vehicule.brand + ' ' + t.vehicule.modele,
            idNumber: t.vehicule.idNumber,
            taxe: t.taxe.denomination,
            amountPaid: t.paidAmount + ' ' + t.devise,
            remainAmount: t.remainAmout + ' ' + t.devise,
            status: t.status,
          };
        });
      }
    });
  }

  onSearch(el) {
    const val = $(el.target).val();
    console.log(val);

    const dataFiltered = this.taxesData.filter((data) => {
      return data.vehicule.idNumber.toString().includes(val);
    });
    if (dataFiltered.length > 0) {
      let i = 0;
      this.datas = dataFiltered.map((t) => {
        return {
          id: i++,
          description: t.vehicule.brand + ' ' + t.vehicule.modele,
          idNumber: t.vehicule.idNumber,
          taxe: t.taxe.denomination,
          amountPaid: t.paidAmount + ' ' + t.devise,
          remainAmount: t.remainAmout + ' ' + t.devise,
          status: t.status,
        };
      });
    }
  }
}
