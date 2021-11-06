import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import $ from 'jquery';
import { TaxeService } from 'src/app/core/services/taxe.service';

@Component({
  selector: 'app-payement-taxe',
  templateUrl: './payement-taxe.component.html',
  styleUrls: ['./payement-taxe.component.css'],
})
export class PayementTaxeComponent implements OnInit {
  displaySuccessDialog = 'none';
  successMessage = '';

  formGroup: FormGroup;
  reasons = [
    { key: '-- Objet --', value: '-- Objet --' },
    { key: 'Taxe', value: 'Taxe' },
    { key: 'Contravention', value: 'Contravention' },
  ];
  types = [];
  periodes = [];

  headers = [
    'Véhicule',
    "N° d'immatriculation",
    'Taxe',
    'Montant payé',
    'Montant restant',
    'Status',
  ];
  taxes = [{ key: 1, value: 'Vignette' }];
  taxesData = [];
  taxeDataSelected: any;
  taxeSelected: any;
  taxeModalite = '';
  taxeEcheance = '';

  idNumberVal = '';
  echeanceSelected = '';
  amountPaid: any = '0';
  remainAmount: any;
  deviseVal = 'CDF';
  periodeSelected: any;

  echeanceMensuel = [
    { key: '01', value: 'Janvier' },
    { key: '02', value: 'Fevrier' },
    { key: '03', value: 'Mars' },
    { key: '04', value: 'Avril' },
    { key: '05', value: 'Mai' },
    { key: '06', value: 'Juin' },
    { key: '07', value: 'Juillet' },
    { key: '08', value: 'Aout' },
    { key: '09', value: 'Septembre' },
    { key: '10', value: 'Octobre' },
    { key: '11', value: 'Novembre' },
    { key: '12', value: 'Decembre' },
  ];

  echeanceJournalier = [
    { key: '01', value: '01' },
    { key: '02', value: '02' },
    { key: '03', value: '03' },
    { key: '04', value: '04' },
    { key: '05', value: '05' },
    { key: '06', value: '06' },
    { key: '07', value: '07' },
    { key: '08', value: '08' },
    { key: '09', value: '09' },
    { key: '10', value: '10' },
    { key: '11', value: '11' },
    { key: '12', value: '12' },
    { key: '13', value: '13' },
    { key: '14', value: '14' },
    { key: '15', value: '15' },
    { key: '16', value: '16' },
    { key: '17', value: '17' },
    { key: '18', value: '18' },
    { key: '19', value: '19' },
    { key: '20', value: '20' },
    { key: '21', value: '21' },
    { key: '22', value: '22' },
    { key: '23', value: '23' },
    { key: '24', value: '24' },
    { key: '25', value: '25' },
    { key: '26', value: '26' },
    { key: '27', value: '27' },
    { key: '28', value: '28' },
    { key: '29', value: '29' },
    { key: '30', value: '30' },
    { key: '31', value: '31' },
  ];

  echeanceAnnuel = [];

  daySelected: any;
  monthSelected: any;
  yearSelected: any;

  displayDayOption = true;
  displayMonthOption = true;

  constructor(
    private formBuilder: FormBuilder,
    private taxeService: TaxeService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      idNumber: ['', Validators.required],
      amount: ['', Validators.required],
      echeanceMensuel: [''],
      echeanceJournalier: [''],
      echeanceAnnuel: ['', Validators.required],
      taxe: ['', Validators.required],
    });
    this.taxesData = this.taxeService.getList();
    console.log(this.taxesData);

    this.taxes = this.taxesData.map((tax) => {
      return {
        key: tax.id,
        value: tax.denomination,
      };
    });

    //check current year and add it up to the list
    const data = new Date();
    const currentYear = data.getFullYear();

    const currentYearData = {
      key: '' + currentYear,
      value: '' + currentYear,
    };
    this.echeanceAnnuel.push(currentYearData);

    const setupYear = 2019;
    const interv = currentYear - setupYear;
    for (let i = 1; i <= interv; i++) {
      const yearData = {
        key: '' + (setupYear + interv - i),
        value: '' + (setupYear + interv - i),
      };
      this.echeanceAnnuel.push(yearData);
    }

    console.log(this.echeanceAnnuel);
  }

  onSearch(el) {}

  onIdNumberKeyUp(el) {
    const val = $(el).val();
    this.idNumberVal = val;
  }

  onPeriodeKeyUp(el) {
    const val = $(el).val();
    this.echeanceSelected = val;
  }

  onSelectITaxe(el) {
    const option = $(el);
    const idTaxe = option.val();
    this.taxeSelected = option.find(':selected').text();
    console.log(this.taxeSelected);

    const data = this.taxesData.filter((tax) => {
      return tax.id === parseInt(idTaxe);
    });
    this.taxeDataSelected = data[0];
    this.taxeModalite = this.taxeDataSelected.modalite + ' CDF';
    this.taxeEcheance = this.taxeDataSelected.typePaiementTaxe.denomination;

    if (this.amountPaid.length > 0) $('.payement-taxe').find('#amount').val('');

    //get selected echeanceSelected
    const date = new Date();

    //Day selected
    let day = date.getDay();
    let dayStr = '';
    if (day < 10) {
      dayStr = '0' + day;
    } else {
      dayStr = '' + day;
    }
    this.daySelected = this.echeanceJournalier.filter((p) => {
      return p.key === dayStr;
    })[0].key;
    console.log('Day: ', this.daySelected);

    //month selected
    let month = date.getMonth() + 1;
    let monthStr = '';
    if (month < 10) {
      monthStr = '0' + month;
    } else {
      monthStr = '' + month;
    }
    this.monthSelected = this.echeanceMensuel.filter((p) => {
      return p.key === monthStr;
    })[0].key;
    console.log('Month: ', this.monthSelected);

    //year selected
    let year = date.getFullYear();
    this.yearSelected = this.echeanceAnnuel.filter((p) => {
      return p.key === '' + year;
    })[0].key;
    console.log('Year: ', this.yearSelected);
    console.log('echeance: ', this.taxeEcheance);

    switch (this.taxeEcheance) {
      case 'Journalier':
        this.displayDayOption = true;
        this.displayMonthOption = true;
        this.echeanceSelected =
          this.daySelected + '/' + this.monthSelected + '/' + this.yearSelected;
        break;
      case 'Mensuel':
        this.displayDayOption = false;
        this.displayMonthOption = true;
        this.echeanceSelected = this.monthSelected + '/' + this.yearSelected;
        break;
      case 'Annuel':
        this.echeanceSelected = this.yearSelected;
        break;
    }
  }

  onSelectPeriode(el) {
    const option = $(el);

    const dayEch = $('.payement-taxe').find('#echeanceJournalier').val();
    const monthEch = $('.payement-taxe').find('#echeanceMensuel').val();
    const yearEch = $('.payement-taxe').find('#echeanceAnnuel').val();

    console.log(this.taxeEcheance);
    console.log(dayEch, monthEch, yearEch);

    switch (this.taxeEcheance) {
      case 'Journalier':
        this.echeanceSelected = dayEch + '/' + monthEch + '/' + yearEch;
        break;
      case 'Mensuel':
        this.displayDayOption = false;
        this.displayMonthOption = true;
        this.echeanceSelected = monthEch + '/' + yearEch;
        break;
      case 'Annuel':
        this.echeanceSelected = yearEch;
        break;
    }
  }

  onAmountTyping(el) {
    const amount = parseInt($(el).val());
    const modalite = this.taxeDataSelected.modalite;

    if (amount > 0 && amount <= modalite) {
      this.amountPaid = amount;
      this.remainAmount = modalite - amount;
    }
    if (amount > modalite) $(el).val(this.amountPaid);
  }

  btnValidate: any;
  errorMsg = '';
  onValideTransaction(el) {
    this.btnValidate = el;

    this.errorMsg = '';
    const status = this.formGroup.status;
    console.log(status);
    console.log(this.formGroup.value);

    if (status === 'VALID') {
      this.onloadingBtn(true);
      const taxeVehicule: any = {};
      taxeVehicule.paidAmount = parseFloat(this.formGroup.value.amount);
      taxeVehicule.payFor = this.echeanceSelected;
      taxeVehicule.remainAmout = parseFloat(this.remainAmount);
      taxeVehicule.taxe = {};
      taxeVehicule.taxe = this.taxeDataSelected;
      taxeVehicule.vehicule = {};
      taxeVehicule.vehicule.idNumber = this.formGroup.value.idNumber;

      this.taxeService.saveTaxeVehicle(taxeVehicule).subscribe((d) => {
        console.log(d);
        this.onloadingBtn(false);
        if (d.code === '200') {
          this.formGroup.reset();
          this.displaySuccessDialog = 'block';
          this.successMessage = d.message;
        } else {
          this.errorMsg = d.message;
        }
      });
    } else {
      this.errorMsg = 'Veuillez renseigner tout les champs';
    }
  }

  onloadingBtn(bool: boolean) {
    const btn = $(this.btnValidate);
    if (bool) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', '');
    }
  }

  closeSuccessDialog(){
    this.displaySuccessDialog='none';
  }
}
