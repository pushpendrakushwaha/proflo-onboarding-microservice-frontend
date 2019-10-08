import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  urlpost = 'http://onboarding-api.proflo.cgi-wave7.stackroute.io/api/login';
  constructor(private fb: FormBuilder, private http: HttpClient, private  cookieService: CookieService, private route: Router) {
     this.http = http; }

  login(body) {
    return this.http.post(this.urlpost, body);
  }

  Remove() {
    this.cookieService.delete('proflo-user-token');
    this.route.navigate(['']);
  }

  Delete() {
    this.cookieService.deleteAll();
  }
 }

