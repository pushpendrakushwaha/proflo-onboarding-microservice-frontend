import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // urlpost = 'http://localhost:5001/api/user';
  constructor() { }
  // formModel= this.fb.group({
  //   PatientId: [''],
  //   FirstName: ['', Validators.required],
  //   LastName:['',Validators.required],
  //   DateOfBirth:['',Validators.required],
  //   UAID:['',Validators.required],
  //   Email:['',Validators.email],
  //   PhoneNumber:['',Validators.maxLength(10)],
  //   EmergencyContactNumber:['',Validators.maxLength(10)],
  //   Gender:['',Validators.required],
  //   city:['',Validators.required]
  // })
}
