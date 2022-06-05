import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filldetails',
  templateUrl: './filldetails.component.html',
  styleUrls: ['./filldetails.component.css']
})
export class FilldetailsComponent implements OnInit {
  requiredForm:any;

  constructor(private fb: FormBuilder) {
    this.myForm();
  }

  //Create required field validator for name
  myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });
  }

  ngOnInit(): void {
  }

}
