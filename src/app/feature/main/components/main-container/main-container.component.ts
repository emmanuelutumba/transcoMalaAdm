import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../core/services/auth.service';
import $ from 'jquery';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  userData: any;

  constructor(private authService: AuthService) {
    this.userData = this.authService.getUserData();
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    const parent = $('.main-container');
    parent.find('.paid-report .item-signal').css('backgroundColor', ' #008000');
    parent.find('.average-paid-report .item-signal').css('backgroundColor', ' #ff9e2e');
    parent.find('.never-paid-report .item-signal').css('backgroundColor', ' #ff0000');
  }

}
