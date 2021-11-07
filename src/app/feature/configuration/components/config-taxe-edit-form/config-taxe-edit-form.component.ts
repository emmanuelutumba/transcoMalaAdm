import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegieService } from 'src/app/core/services/regie.service';
import $ from 'jquery';
import { TaxeService } from 'src/app/core/services/taxe.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-config-taxe-edit-form',
  templateUrl: './config-taxe-edit-form.component.html',
  styleUrls: ['./config-taxe-edit-form.component.css'],
})
export class ConfigTaxeEditFormComponent implements OnInit {
  @Input() display = 'none';
  formGroup: FormGroup;
  errorMsg = '';

  echeances = [
    { key: 1, value: 'Journalier' },
    { key: 2, value: 'Mensuel' },
    { key: 3, value: 'Annuel' },
  ];

  devises = [
    { key: 'CDF', value: 'CDF' },
    { key: 'USD', value: 'USD' },
  ];

  regies = [];
  regiesData: any;
  regieSelected: any;
  taxe: any;

  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventValidate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private regieService: RegieService,
    private taxeService: TaxeService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      devise: ['', Validators.required],
      echeance: ['', Validators.required],
      modalite: ['', Validators.required],
      regie: ['', Validators.required],
    });

    this.regieService.loadData().subscribe((data) => {
      this.regiesData = data;
      this.regies = data.map((r) => {
        return {
          key: r.id,
          value: r.name,
        };
      });
    });
    this.regieService.getAll();

    this.sharedService.getTaxe().subscribe((t) => {
      console.log('dataTaxe: ', t);
      this.taxe = t;
      const data: any = {};
      data.name = t.denomination;
      data.modalite = t.modalite;
      data.devise = t.devise;
      data.echeance = t.typePaiementTaxe.id;
      data.regie = t.regie !== undefined ? t.regie.id : '';
      this.formGroup.patchValue(data);
    });
  }

  btnValid: any;
  onValidate(el) {
    console.log(el);

    this.btnValid = el;

    const status = this.formGroup.status;
    if (status === 'VALID') {
      this.taxe.denomination = this.formGroup.value.name;
      this.taxe.modalite = parseFloat(this.formGroup.value.modalite);
      this.taxe.devise = this.formGroup.value.devise;
      this.taxe.typePaiementTaxe = {};
      this.taxe.typePaiementTaxe.id = parseInt(
        this.formGroup.value.echeance,
        10
      );
      this.taxe.regie = this.regieSelected;
      console.log(this.taxe);
      this.loadingSaveBtn(true);
      this.taxeService.update(this.taxe).subscribe((data) => {
        console.log(data);

        this.loadingSaveBtn(false);

        if (data.code === '200') {
          this.eventValidate.emit();
        }
      });
    }
  }

  onClose() {
    this.eventClose.emit();
  }

  loadingSaveBtn(load: boolean) {
    const btn = $(this.btnValid);
    if (load) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', '');
    }
  }

  onOptionSelected(el) {
    const val = $(el).val();
    const id = parseInt(val, 10);
    console.log(id);

    this.regieSelected = this.regiesData.filter((r) => {
      return r.id === id;
    })[0];
  }
}
