import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth.service';
import {UserModel} from '../../../../core/model/user.model';
import {Router} from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {
  formGroup: FormGroup;
  errorMsg = '';
  loginBtn: any;



  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  init(){

  }

  onLogin(event) {
    this.loginBtn = event;

    const status = this.formGroup.status;
    if (status === 'VALID') {

      this.loading(true);
      const user: UserModel = this.formGroup.value;

      this.authService.login(user).subscribe(response => {
        this.loading(false);
        console.log(response);
        if (response.code === '200') {
          this.router.navigate(['main']);
        } else {
          this.errorMsg = response.message;
        }
      });
    }
  }

  loading(load: boolean) {
    const btn = $(this.loginBtn);
    if (load) {
      btn.attr('disabled', 'disabled');
      btn.find('i').attr('class', 'fa fa-spin fa-spinner');
    } else {
      btn.attr('disabled', false);
      btn.find('i').attr('class', '');
    }
  }
}
