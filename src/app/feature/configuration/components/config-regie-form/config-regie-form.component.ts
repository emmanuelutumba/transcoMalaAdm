import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import $ from 'jquery';
import { RegieService } from 'src/app/core/services/regie.service';

@Component({
  selector: 'app-config-regie-form',
  templateUrl: './config-regie-form.component.html',
  styleUrls: ['./config-regie-form.component.css'],
})
export class ConfigRegieFormComponent implements OnInit {
  @Input() display = 'none';
  formGroup: FormGroup;
  selectOption = [
    { key: 'M-PESA', value: 'M-PESA' },
    { key: 'AIRTEL MONEY', value: 'AIRTEL MONEY' },
    { key: 'ORANGE MONEY', value: 'ORANGE MONEY' },
    { key: 'AFRIMONEY', value: 'AFRIMONEY' },
  ];
  errorMsg = '';

  @Output() eventClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventValidate: EventEmitter<any> = new EventEmitter<any>();

  headers = ['Type', 'Numéro'];
  data = [];

  payementAccounts = [];

  constructor(
    private formBuilder: FormBuilder,
    private regieService: RegieService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      denomination: ['', Validators.required],
    });
  }

  onPayement() {
    const number = this.formGroup.value.number;
    const denomination = this.formGroup.value.denomination;

    if (number.length > 0 && denomination.length > 0) {
      this.payementAccounts.push({
        denomination: denomination,
        number: number,
      });
      this.formGroup.patchValue({
        number: '',
        denomination:''
      });
    }
  }

  btnValid: any;
  onValidate(el) {
    this.btnValid = el;
    const regie: any = {};
    const name = this.formGroup.value.name;

    if (name.length > 0) {
      regie.name = name;
      regie.comptes = this.payementAccounts;
      console.log(regie);

      this.loadingSaveBtn(true);
      this.regieService.save(regie).subscribe((httpResponse) => {
        console.log(httpResponse);

        this.loadingSaveBtn(false);
        if (httpResponse.code === '200') {
          this.formGroup.reset();
          this.payementAccounts=[];
          this.eventValidate.emit();
        } else {
        }
      });
    }
  }

  loadingSaveBtn(load: boolean) {
    const btn = $('.config-regie-form').find('#regie-add-form');
    if (load) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', '');
    }
  }

  onClose() {
    this.loadingSaveBtn(false);
    this.eventClose.emit();
  }
}
