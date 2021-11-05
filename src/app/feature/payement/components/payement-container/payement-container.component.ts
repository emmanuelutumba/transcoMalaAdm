import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import $ from 'jquery';

@Component({
  selector: 'app-payement-container',
  templateUrl: './payement-container.component.html',
  styleUrls: ['./payement-container.component.css']
})
export class PayementContainerComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

  }

  onSelectedTab(btn) {
    console.log(btn);
    $('.payement-container').find('.btn-tab').attr('class', 'btn-tab btn btn-info');
    $(btn).attr('class', 'btn-tab btn btn-info active-tab');
  }
}
