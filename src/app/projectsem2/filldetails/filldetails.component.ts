import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { project_sem2 } from '../../services/project-sem2.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-filldetails',
  templateUrl: './filldetails.component.html',
  styleUrls: ['./filldetails.component.css']
})
export class FilldetailsComponent implements OnInit {
  requiredForm: any;
  data: any;

  constructor(private fb: FormBuilder, private project_sem2: project_sem2, private router: Router) {
    this.myForm();
  }


  myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      mobile: ['', Validators.required],
      about: ['', Validators.required],
    });
  }

  details() {
    this.data = this.requiredForm.value;
    this.project_sem2.dataflow(this.data);
    this.router.navigate(['temp_one']);
  }

  ngOnInit(): void {
  }

}
