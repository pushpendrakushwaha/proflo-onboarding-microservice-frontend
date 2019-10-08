import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { SignupService } from './signup.service';
import { pluck } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  token: string;
  profileForm = this.fb.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email, Validators.pattern('[^ @]*@[^ @]*')]],
    Username: ['', Validators.required],
    Password: ['', [Validators.required, Validators.minLength(6)]],
    ConfirmPassword: ['', Validators.required]
  });

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private fb: FormBuilder, private service: SignupService, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.activatedRoute.queryParams.pipe(pluck('token')).subscribe((token: string) => {
      this.token = token;
    });
  }

  onSignUp() {
    console.log(this.profileForm.value);
  }

  onSubmit() {
    if (isNullOrUndefined(this.token)) {
      // DoSomething
      // Show SnackBar
      this.snackBar.open('Access denied!!!...', '', { duration: 5001, verticalPosition: 'top'});
    }
    this.service.createProfile(this.profileForm.value, this.token).subscribe(data => {
      console.log(data);
      this.router.navigate(['/login']);
    });
  }
}
