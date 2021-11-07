import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegieService } from 'src/app/core/services/regie.service';
import $ from 'jquery';
import { TaxeService } from 'src/app/core/services/taxe.service';

@Component({
  selector: 'app-config-taxe-add-form',
  templateUrl: './config-taxe-add-form.component.html',
  styleUrls: ['./config-taxe-add-form.component.css'],
})
export class ConfigTaxeAddFormComponent implements OnInit {
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

  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventValidate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private regieService: RegieService,
    private taxeService: TaxeService
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
  }

  btnValid: any;
  onValidate(el) {
    console.log(el);

    this.btnValid = el;

    const status = this.formGroup.status;
    if (status === 'VALID') {
      const taxe: any = {};
      taxe.denomination = this.formGroup.value.name;
      taxe.modalite = parseFloat(this.formGroup.value.modalite);
      taxe.devise = this.formGroup.value.devise;
      taxe.typePaiementTaxe = {};
      taxe.typePaiementTaxe.id = parseInt(this.formGroup.value.echeance, 10);
      taxe.regie = this.regieSelected;
      console.log(taxe);
      this.loadingSaveBtn(true);
      this.taxeService.save(taxe).subscribe((data) => {
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
