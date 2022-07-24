import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temp-two',
  templateUrl: './temp-two.component.html',
  styleUrls: ['./temp-two.component.css']
})
export class TempTwoComponent implements OnInit {
  data: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.data=localStorage.getItem('formdetails');
    this.data = JSON.parse(this.data);
    this.isnotnull();

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
