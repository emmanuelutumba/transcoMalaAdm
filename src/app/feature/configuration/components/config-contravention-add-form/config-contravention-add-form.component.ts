import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import $ from 'jquery';
import { ContraventionService } from 'src/app/core/services/contravention.service';

@Component({
  selector: 'app-config-contravention-add-form',
  templateUrl: './config-contravention-add-form.component.html',
  styleUrls: ['./config-contravention-add-form.component.css']
})
export class ConfigContraventionAddFormComponent implements OnInit {
  @Input() display = 'none';
  formGroup: FormGroup;
  errorMsg = '';

  devises = [
    { key: 'CDF', value: 'CDF' },
    { key: 'USD', value: 'USD' },
  ];

  contraventions = [];
  contraventionsData: any;
  contraventionselected: any;

  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventValidate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private contraventionservice: ContraventionService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      devise: ['', Validators.required],
      modalite: ['', Validators.required]
    });
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
      taxe.regie = this.contraventionselected;
      console.log(taxe);
      this.loadingSaveBtn(true);
      this.contraventionservice.save(taxe).subscribe((data) => {
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

    this.contraventionselected = this.contraventionsData.filter((r) => {
      return r.id === id;
    })[0];
  }
}
