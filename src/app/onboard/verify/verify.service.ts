import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {
  urlpost = 'http://onboarding-api.proflo.cgi-wave7.stackroute.io/api/verification';
  constructor(private fb: FormBuilder, private http: HttpClient) { }


  CreateEmail(body) {
    // var body={
    //   FirstName:this.formModel.value.FirstName,
    //   LastName:this.formModel.value.LastName,
    //   Email:this.formModel.value.Email,
    //   UserName:this.formModel.value.UserName,
    //   Password:this.formModel.value.Password,
    //   ComfirmPassword:this.formModel.value.Password,
    //   }
    return this.http.post(this.urlpost, body);

  }
}
