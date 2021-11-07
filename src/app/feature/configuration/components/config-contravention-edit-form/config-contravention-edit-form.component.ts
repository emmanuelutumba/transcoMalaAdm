import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import $ from 'jquery';
import { ContraventionService } from 'src/app/core/services/contravention.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-config-contravention-edit-form',
  templateUrl: './config-contravention-edit-form.component.html',
  styleUrls: ['./config-contravention-edit-form.component.css'],
})
export class ConfigContraventionEditFormComponent implements OnInit {
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

  contravention: any;

  constructor(
    private formBuilder: FormBuilder,
    private contraventionservice: ContraventionService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      devise: ['', Validators.required],
      modalite: ['', Validators.required],
    });

    this.sharedService.getContravention().subscribe((t) => {
      console.log('dataTaxe: ', t);
      this.contravention = t;
      const data: any = {};
      data.name = t.denomination;
      data.modalite = t.modalite;
      data.devise = t.devise;
      this.formGroup.patchValue(data);
    });
  }

  btnValid: any;
  onValidate(el) {
    console.log(el);

    this.btnValid = el;

    console.log(this.formGroup.value);

    const status = this.formGroup.status;
    if (status === 'VALID') {
      this.contravention.denomination = this.formGroup.value.name;
      this.contravention.modalite = parseFloat(this.formGroup.value.modalite);
      this.contravention.devise = this.formGroup.value.devise;

      console.log(this.contravention);
      this.loadingSaveBtn(true);
      this.contraventionservice.update(this.contravention).subscribe((data) => {
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
}
