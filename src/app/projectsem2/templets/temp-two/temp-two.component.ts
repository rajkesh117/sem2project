import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temp-two',
  templateUrl: './temp-two.component.html',
  styleUrls: ['./temp-two.component.css']
})
export class TempTwoComponent implements OnInit {
  data: any;
  PG: any;
  Job: any;
  showpg: boolean | undefined;
  showjob: boolean | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.data=localStorage.getItem('formdetails');
    this.data = JSON.parse(this.data);
    this.isnotnull();
    this.formdisplay();

  }

  formdisplay() {
    this.PG = localStorage.getItem('PG');
    this.PG = JSON.parse(this.PG);
    this.Job = localStorage.getItem('job');
    this.Job = JSON.parse(this.Job);

    if (this.PG == "yes") {
      this.showpg = true;
    }
    else{
      this.showpg = false;
    }
    if (this.Job == "yes") {
      this.showjob = true;
    }
    else{
      this.showjob = false;
    }
  }
  get formdata() {
    return this.data;
  }
  
  isnotnull() {
    if (this.formdata == null) {
      alert("please fill details on details page");
      this.router.navigate(['filldetails']);
    }
  }
}
