import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContraventionService } from 'src/app/core/services/contravention.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import $ from 'jquery';

@Component({
  selector: 'app-payement-contravention',
  templateUrl: './payement-contravention.component.html',
  styleUrls: ['./payement-contravention.component.css'],
})
export class PayementContraventionComponent implements OnInit {
  vehicule = '';
  contravention = '';
  modalite = '';
  errorMsg = '';

  headers = [
    'Véhicule',
    "N° d'immatriculation",
    'Contravention',
    'Montant payé',
    'Montant restant',
    'Status',
  ];

  disableOption = true;
  options = [
    {
      id: '1',
      value: 'Payé',
      disable: this.disableOption,
    },
  ];
  contraventions = [];
  contraventionData = [];
  contribuable: any;

  formGroup: FormGroup;

  constructor(
    private sharedServie: SharedService,
    private contraventionService: ContraventionService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      amount: ['', Validators.required],
    });
    this.contraventionService.loadContravention().subscribe((data) => {
      this.loadingSearch(false);
      console.log(data);

      if (data.code === '200') {
        this.contraventionData = data.data;
        this.contraventions = data.data.map((i) => {
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

  searchBtn: any;
  idNumberSelected: any;
  onSearch(el) {
    this.searchBtn = el;
    const val = $('.payement-contravention').find('#search-car').val();
    this.idNumberSelected = val;
    console.log(val);

    if (val.length > 0) {
      this.loadingSearch(true);
      this.contraventionService.getCarContravention(val);
    }
  }

  loadingSearch(bool: boolean) {
    const btn = $(this.searchBtn);
    if (bool) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', 'fa fa-search');
    }
  }

  onOptionSelected(id) {}

  contr: any;
  onItemSelected(data) {
    console.log(data);
    this.contr = this.contraventionData.filter(
      (c) => c.id === parseInt(data)
    )[0];
    console.log(this.contr);
    this.vehicule =
      '  ' +
      this.contr.vehicule.brand +
      ' ' +
      this.contr.vehicule.modele +
      '/ ' +
      this.contr.vehicule.idNumber;
    this.contravention = '  ' + this.contr.infraction.denomination;
    this.modalite =
      '  ' +
      this.contr.infraction.modalite +
      ' ' +
      this.contr.infraction.devise;
  }

  onItemSelectedData(data) {}

  validBtn: any;
  displaySuccessDialog = 'none';
  successMessage = '';
  onValideTransaction(el) {
    this.validBtn = el;
    const amountEl = $('.payement-contravention').find('#amount');
    const val = amountEl.val();
    this.errorMsg = '';
    console.log(val);

    if (val.length > 0 && this.contr != undefined) {
      this.loadingValidateBtn(true);
      this.contr.paidAmount = parseFloat(val);
      this.contraventionService
        .contraventionPayement(this.contr)
        .subscribe((data) => {
          this.loadingValidateBtn(false);
          console.log(data);

          if (data.code === '200') {
            this.contraventionService.getCarContravention(
              this.idNumberSelected
            );
            this.displaySuccessDialog = 'block';
            amountEl.val('');
          } else {
            this.errorMsg = data.message;
          }
        });
    } else {
      this.errorMsg =
        'Veuillez séléctionner la contravention à payer et renseigner le montant';
    }
  }

  loadingValidateBtn(bool: boolean) {
    const btn = $(this.validBtn);
    if (bool) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', '');
    }
  }

  closeSuccessDialog() {
    this.displaySuccessDialog = 'none';
  }

  onKeyUp(el) {
    const val = $(el).val();
    console.log(val);

    if (this.contr !== undefined) {
      if (parseInt(val) > this.contr.infraction.modalite) {
        $(el).val('');
      }
    }
  }
}
