import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-payement-container',
  templateUrl: './payement-container.component.html',
  styleUrls: ['./payement-container.component.css']
})
export class PayementContainerComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group([
      {
        numeroPlaque: ['', Validators.required],
        taxe: ['', Validators.required]
      }
    ]);
  }

}
