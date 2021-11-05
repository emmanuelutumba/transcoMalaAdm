import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../../shared/services/shared.service';
import {ContraventionService} from '../../../../core/services/contravention.service';
import {Router} from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-contravention',
  templateUrl: './contravention.component.html',
  styleUrls: ['./contravention.component.css']
})
export class ContraventionComponent implements OnInit {

  headers = [
    'Véhicule', 'N° d\'immatriculation', 'Contravention', 'Montant payé', 'Montant restant', 'Status'
  ];

  disableOption = true;
  options = [{
    id: '1', value: 'Payé', disable: this.disableOption
  }
  ];
  contraventions = [];
  contraventionData = [];
  contribuable: any;

  constructor(private sharedServie: SharedService,
              private contraventionService: ContraventionService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.contribuable = this.sharedServie.loadDataContribuable();
    if (this.contribuable !== undefined) {
      this.contraventionService.getAll(this.contribuable.id).subscribe(data => {
        console.log(data);
        if (data.code === '200') {
          this.contraventionData = data.data;
          this.contraventions = data.data.map(i => {
            return {
              id: i.id,
              description: i.vehicule.brand + ' ' + i.vehicule.modele,
              idNumber: i.vehicule.idNumber,
              taxe: i.infraction.denomination,
              amountPaid: i.paidAmount + ' ' + i.infraction.devise,
              remainAmount: i.remainAmout + ' ' + i.infraction.devise,
              status: i.status
            };
          });
        }
      });
    }
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

  onItemSelected($event) {
    this.onDisableOptions(false);
  }

  onItemSelectedData(data) {
    console.log(data);
  }

  onSearch(el) {
    const val = $(el).val().toLowerCase();
    const size = val.length;

    const contraventionList = this.contraventionData;
    if (size > 0) {
      const data = contraventionList.filter(c => {
        console.log(c.vehicule.idNumber);
        return c.vehicule.idNumber.toString().toLowerCase().includes(val);
      });
      this.contraventions = data.map(i => {
        return {
          id: i.id,
          description: i.vehicule.brand + ' ' + i.vehicule.modele,
          taxe: i.infraction.denomination,
          amountPaid: i.paidAmount + ' ' + i.infraction.devise,
          remainAmount: i.remainAmout + ' ' + i.infraction.devise,
          status: i.status
        };
      });
    } else {
      this.contraventions = this.contraventionData.map(i => {
        return {
          id: i.id,
          description: i.vehicule.brand + ' ' + i.vehicule.modele,
          taxe: i.infraction.denomination,
          amountPaid: i.paidAmount + ' ' + i.infraction.devise,
          remainAmount: i.remainAmout + ' ' + i.infraction.devise,
          status: i.status
        };
      });
    }
  }
}
