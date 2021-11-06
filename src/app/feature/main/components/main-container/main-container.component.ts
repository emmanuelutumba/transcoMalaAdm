import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import $ from 'jquery';
import { Router } from '@angular/router';
import { TaxeService } from 'src/app/core/services/taxe.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent implements OnInit {
  userData: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private taxeService: TaxeService
  ) {
    this.userData = this.authService.getUserData();
    if (this.userData == null) {
      this.userData = { username: '' };
    }
    this.router.navigate(['main/report/insurance']);
    this.taxeService.loadTaxes();
  }

  ngOnInit(): void {
    this.init();
  }

  init() {}
}
