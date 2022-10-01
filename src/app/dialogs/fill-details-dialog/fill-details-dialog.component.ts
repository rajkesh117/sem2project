import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-fill-details-dialog',
  templateUrl: './fill-details-dialog.component.html',
  styleUrls: ['./fill-details-dialog.component.css']
})
export class FillDetailsDialogComponent implements OnInit {

  studentfield: any;
  doingpg: any;
  fillform: any;
  doingjob:any;
  datastorage:any;
  constructor(public dialogRef: MatDialogRef<FillDetailsDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.studentfield = true;
  }
  student(event: string) {
    if (event == 'yes') {
      this.studentfield = false;
      this.doingpg = true;
    }
    else if(event == 'no'){
      this.studentfield = false;
      this.doingpg = true;
    }
    localStorage.setItem('student', JSON.stringify(event));
  }

  Doingpg(event: string) {
    if (event == 'yes') {
      this.doingpg = false;
      this.doingjob = true;
    }
    else if(event == 'no'){
      this.doingpg = false;
      this.doingjob = true;
    }
    localStorage.setItem('PG', JSON.stringify(event));
  }

  Doingjob(event: string) {
    if (event == 'yes') {
      this.fillform = true;
    }
    else if(event == 'no'){
      this.fillform = true;
    }
    localStorage.setItem('job', JSON.stringify(event));
    localStorage.setItem('filldetails', JSON.stringify(true));
    this.close();
    this.datastorage = localStorage.getItem('job');
    console.log(this.datastorage);
  }

  close() {
    this.dialogRef.close();
  }
}
