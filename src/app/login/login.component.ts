import { Component, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

export interface LoginResponse {
  firstName: string;
  lastName: string;
  token: string;
  username: string;
  id: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  formGroup: FormGroup;
  loginFailed: boolean = false;
  @Output() onUserLoggedIn: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.formGroup = formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required],
    });
  }

  login(post) {
    console.log(post);
    this.http.post<LoginResponse>(environment.API_BASE_URL + 'login/', post)
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.username);
          localStorage.setItem('user_id', response.id);
          this.router.navigateByUrl('/');
          this.loginFailed = false;
        },
        error => {
          this.loginFailed = true;
        }
      );
  }
}
