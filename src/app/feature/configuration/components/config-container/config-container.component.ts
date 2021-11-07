import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-config-container',
  templateUrl: './config-container.component.html',
  styleUrls: ['./config-container.component.css']
})
export class ConfigContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedTab(btn) {
    console.log(btn);
    $('.config-container').find('.btn-tab').attr('class', 'btn-tab btn btn-info');
    $(btn).attr('class', 'btn-tab btn btn-info active-tab');
  }

}
