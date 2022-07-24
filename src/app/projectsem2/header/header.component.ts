import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginservice } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  constructor(private loginser: loginservice, private router: Router) { }

  ngOnInit(): void {
  }

  get data() {
    return this.loginser.logindata
  }

  logout() {
    if (confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('formdetails');
      console.log(localStorage.getItem('username'));
      console.log(localStorage.getItem('password'));
      this.router.navigate(['landingpage']);
      window.location.reload();
    } else {
      return;
    }
  }
}
