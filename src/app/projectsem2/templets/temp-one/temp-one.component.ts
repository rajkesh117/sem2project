import { Component, OnInit } from '@angular/core';
import { project_sem2 } from '../../../services/project-sem2.service';

@Component({
  selector: 'app-temp-one',
  templateUrl: './temp-one.component.html',
  styleUrls: ['./temp-one.component.css']
})
export class TempOneComponent implements OnInit {

  constructor(private project_sem2: project_sem2) { }

  ngOnInit(): void {
  }
  get formdata() {
    return this.project_sem2.visibledata;
  }
}
