import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { VerifyService } from './verify.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {


  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog, private service: VerifyService) { }
verifyForm = this.fb.group({
  Email: ['', [ Validators.required, Validators.email,  Validators.pattern('[^ @]*@[^ @]*')]]
  });

  onVerify() {
    console.log(this.verifyForm.value);
    }

  ngOnInit() {
  }

  verify() {
    this.service.CreateEmail(this.verifyForm.value).subscribe(data => console.log(data));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
