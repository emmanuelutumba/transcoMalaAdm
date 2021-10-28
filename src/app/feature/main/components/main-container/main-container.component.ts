import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../core/services/auth.service';
import $ from 'jquery';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  userData: any;

  constructor(private authService: AuthService, private router: Router) {
    this.userData = this.authService.getUserData();
    if (this.userData == null) {
      this.userData = {username: ''};
    }
    this.router.navigate(['main/report/insurance']);
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
  }

}
