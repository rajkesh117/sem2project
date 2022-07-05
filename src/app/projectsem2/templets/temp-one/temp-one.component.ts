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
  constructor(private project_sem2: project_sem2, private router: Router) { }

  ngOnInit(): void {
    this.isnotnull();
  }
  get formdata() {
    return this.project_sem2.visibledata;
  }

  isnotnull() {
    if (this.formdata == null) {
      alert("please fill details on details page");
      this.router.navigate(['filldetails']);
    }
  }
}
