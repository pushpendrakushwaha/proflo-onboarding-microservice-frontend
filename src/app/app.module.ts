import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,  MatDialogModule, MatSnackBarModule} from '@angular/material';
import { OnboardModule } from './onboard/onboard.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './onboard/signup/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DialogComponent } from './onboard/dialog/dialog.component';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    OnboardModule,
    HttpClientModule,
    RouterModule.forRoot([

    ]),
  ],
  entryComponents: [
    DialogComponent,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
