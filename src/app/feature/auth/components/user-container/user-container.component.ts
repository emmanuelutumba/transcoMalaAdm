import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedTab(btn) {
    console.log(btn);
    $('.user-container').find('.btn-tab').attr('class', 'btn-tab btn btn-info');
    $(btn).attr('class', 'btn-tab btn btn-info active-tab');
  }

}
