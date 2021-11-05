import {Component, OnInit} from '@angular/core';
import {TaxeService} from '../../../../core/services/taxe.service';
import {SharedService} from '../../../../shared/services/shared.service';
import $ from 'jquery';
import {Router} from '@angular/router';

@Component({
  selector: 'app-taxe',
  templateUrl: './taxe.component.html',
  styleUrls: ['./taxe.component.css']
})
export class TaxeComponent implements OnInit {

  headers = [
    'Véhicule', 'N° d\'immatriculation', 'Taxe', 'Montant payé', 'Montant restant', 'Status'
  ];
  taxes = [];
  taxesData = [];

  disableOption = true;
  options = [{
    id: '1', value: 'Payé', disable: this.disableOption
  }
  ];

  constructor(private taxeService: TaxeService,
              private sharedService: SharedService, private router: Router) {
  }

  ngOnInit(): void {
    const contribuable = this.sharedService.loadDataContribuable();
    this.taxeService.getAll(contribuable.id).subscribe(data => {
      console.log(data);
      if (data.code === '200') {
        this.taxesData = data.data;
        let i = 0;
        this.taxes = data.data.map(t => {
          return {
            id: i++,
            description: t.vehicule.brand + ' ' + t.vehicule.modele,
            idNumber: t.vehicule.idNumber,
            taxe: t.taxe.denomination,
            amountPaid: t.paidAmount + ' ' + t.devise,
            remainAmount: t.remainAmout + ' ' + t.devise,
            status: t.status
          };
        });
      }
    });
  }

  onOptionSelected(id) {
    switch (id) {
      case '1':
        this.router.navigate(['main/payement']);
        break;
    }
  }

  onDisableOptions(bool: boolean) {
    this.disableOption = bool;
    this.options = [{
      id: '1', value: 'Payé', disable: this.disableOption
    }];
  }

  onSearch(el) {
    const val = $(el).val().toLowerCase();
    const size = val.length;

    const taxesList = this.taxesData;
    if (size > 0) {
      const data = taxesList.filter(t => {
        console.log(t.vehicule.idNumber);
        return t.vehicule.idNumber.toString().toLowerCase().includes(val);
      });
      let i = 0;
      this.taxes = data.map(t => {
        return {
          id: i++,
          description: t.vehicule.brand + ' ' + t.vehicule.modele,
          idNumber: t.vehicule.idNumber,
          taxe: t.taxe.denomination,
          amountPaid: t.paidAmount + ' ' + t.devise,
          remainAmount: t.remainAmout + ' ' + t.devise,
          status: t.status
        };
      });
    } else {
      let i = 0;
      this.taxes = this.taxesData.map(t => {
        return {
          id: i++,
          description: t.vehicule.brand + ' ' + t.vehicule.modele,
          idNumber: t.vehicule.idNumber,
          taxe: t.taxe.denomination,
          amountPaid: t.paidAmount + ' ' + t.devise,
          remainAmount: t.remainAmout + ' ' + t.devise,
          status: t.status
        };
      });
    }
  }
}
