import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { LoginService } from './login.service';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// tslint:disable-next-line:max-line-length
constructor(private router: Router, private fb: FormBuilder, private service: LoginService, private authService: AuthService, private cookieService: CookieService) { }
loginForm = this.fb.group({

  Email: ['', [ Validators.required, Validators.email,  Validators.pattern('[^ @]*@[^ @]*')]],
  Password: ['', [Validators.required, Validators.minLength(6)]]
   });

  onLogin() {
    const loginCredentials = this.loginForm.value;
    this.service.login(loginCredentials).subscribe((data: any )  => {
      this.cookieService.set('proflo-user-token', data.userAccessToken, 2147483647, '/', '.proflo.cgi-wave7.stackroute.io');
      console.log(data.userAccessToken);
      window.location.href = "http://core.proflo.cgi-wave7.stackroute.io";
    });
  }

  ngOnInit() {
  }

  login() {

  }

  verify() {
    this.router.navigate(['/verify']);
  }

  openGit() {
    window.open("https://github.com/login/oauth/authorize?client_id=72922e71df7b8c170119", "_self", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");

  }

}
