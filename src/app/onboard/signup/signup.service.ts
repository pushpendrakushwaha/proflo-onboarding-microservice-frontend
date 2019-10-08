import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  urlPost = 'http://onboarding-api.proflo.cgi-wave7.stackroute.io/api/user';
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  createProfile(profile, token) {
    console.log(`Bearer ${token}`);
    return this.http.post(this.urlPost, profile, {
      headers: new HttpHeaders({Authorization: `Bearer ${token}`}),
    });
  }
}
