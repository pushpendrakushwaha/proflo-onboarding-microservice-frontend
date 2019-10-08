import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatGridListModule
} from '@angular/material';
import { LoginService } from './login/login.service';
import { SignupService } from './signup/signup.service';
import { VerifyComponent } from './verify/verify.component';
import { DialogComponent } from './dialog/dialog.component';
import { CookieService } from 'ngx-cookie-service';
import { Routes, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [LoginComponent,
  SignupComponent,
  VerifyComponent,
  DialogComponent],

  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  exports: [
    HttpClientModule,
    AppRoutingModule,
    LoginComponent,
    VerifyComponent,
    DialogComponent,
    SignupComponent,
    MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatIconModule,
   MatDialogModule,
   MatSnackBarModule,
   MatProgressSpinnerModule
  ],
  providers: [SignupService, LoginService, AuthService],
})


export class OnboardModule { }
