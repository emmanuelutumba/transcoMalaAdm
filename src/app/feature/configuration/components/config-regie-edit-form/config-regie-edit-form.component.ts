import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import $ from 'jquery';
import { RegieService } from 'src/app/core/services/regie.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-config-regie-edit-form',
  templateUrl: './config-regie-edit-form.component.html',
  styleUrls: ['./config-regie-edit-form.component.css'],
})
export class ConfigRegieEditFormComponent implements OnInit {
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

  headers = ['Type', 'Numéro', ''];

  regieData: any;
  payementAccounts = [];
  modePayementSelected: any;

  constructor(
    private formBuilder: FormBuilder,
    private regieService: RegieService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedService.getRegie().subscribe((regie) => {
      this.regieData = regie;
      this.payementAccounts = regie.comptes.map((c) => {
        return {
          id: c.id,
          denomination: c.denomination,
          number: c.number,
        };
      });
    });

    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      denomination: ['', Validators.required],
    });
  }

  onSelectDataItem(data) {
    console.log('data: ', data);

    this.modePayementSelected = data.denomination;
    $('.config-regie-edit-form').find('#number').val(data.number);
  }

  onRemItem(id) {
    console.log(id);
    const data = this.payementAccounts.filter((r) => {
      return r.id !== id;
    });
    this.payementAccounts = data;
    console.log(this.payementAccounts);
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
        denomination: '',
      });
    }
  }

  btnValid: any;
  onValidate(el) {
    this.btnValid = el;
    const regie: any = this.regieData;
    const name = this.formGroup.value.name;

    if (name.length > 0) {
      regie.name = name;
      console.log(regie);

      this.loadingSaveBtn(true);
      this.regieService.update(regie).subscribe((httpResponse) => {
        console.log(httpResponse);

        this.loadingSaveBtn(false);
        if (httpResponse.code === '200') {
          this.formGroup.reset();
          this.payementAccounts = [];
          this.eventValidate.emit();
        } else {
        }
      });
    }
  }

  loadingSaveBtn(load: boolean) {
    const btn = $('.config-regie-edit-form').find('#regie-add-form');
    if (load) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', '');
    }
  }

  onClose() {
    this.payementAccounts = [];
    this.formGroup.reset();
    this.loadingSaveBtn(false);
    this.eventClose.emit();
  }
}
