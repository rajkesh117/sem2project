import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  data: any;
  button_name: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.data = localStorage.getItem('formdetails');
    this.data = JSON.parse(this.data);
    this.button_names();
  }

  visit_temp1() {
    if (this.data != null) {
      this.router.navigate(['temp_one']);
    }
    else {
      alert("Templet data is empty please fill the data in details section")
      this.router.navigate(['filldetails']);
    }
  }

  visit_temp2() {
    if (this.data != null) {
      this.router.navigate(['temp_two']);
    }
    else {
      alert("Templet data is empty please fill the data in details section")
      this.router.navigate(['filldetails']);
    }
  }

  button_names() {
    if (this.data != null) {
      this.button_name = "View";
    }
    else {
      this.button_name = "Create";
    }
  }
}
