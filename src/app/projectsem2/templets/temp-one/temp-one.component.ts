import { Component, OnInit } from '@angular/core';
import { project_sem2 } from '../../../services/project-sem2.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-temp-one',
  templateUrl: './temp-one.component.html',
  styleUrls: ['./temp-one.component.css']
})
export class TempOneComponent implements OnInit {
  data: any;
  PG: any;
  Job: any;
  showpg: boolean | undefined;
  showjob: boolean | undefined;
  constructor(private project_sem2: project_sem2, private router: Router) { }

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
