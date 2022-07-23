import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { loginservice } from '../../services/login.service'

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  register: any;
  login: any;
  login_data: any;
  userId: any;
  username: any;
  password: any;
  constructor(private fb: FormBuilder, private router: Router, private authservice: AuthService, private loginser: loginservice) {

  }

  ngOnInit(): void {
    this.registerform();
    this.loginform();
    if (localStorage['username'] && localStorage['password'] != null) {
      this.username = localStorage.getItem('username');
      this.password = localStorage.getItem('password');
      this.login_button();
    }
  }

  registerform() {
    this.register = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', Validators.required],
    });
  }

  loginform() {
    this.login = this.fb.group({
      username: [this.username, Validators.required],
      password: [this.password, Validators.required],
    });
  }

  register_button() {
    if (this.register.valid) {
      console.log("started");
      this.userId = Math.floor((Math.random() * 100) + 1);
      this.authservice.registeruser(
        [
          this.userId,
          this.register.value.username,
          this.register.value.email,
          this.register.value.password]
      ).subscribe((res) => {
        if (res == "Success") {
          alert("Registration_successful");
        }
        else if (res == "Already Exist") {
          alert("Email_id or User_name already exist OR Id Fail Try again");
        }
        else {
          alert("Somthing went wrong check console for error")
        }
      });
    }
    else {
      alert("Please fill mandatory fields")
    }
  }

  login_button() {
    if(localStorage['username'] && localStorage['password'] != null){
      this.login.value.username = this.username;
      this.login.value.password = this.password;
    }
    if (this.login.value.username && this.login.value.password != null) {
      this.authservice.loginuser(
        [
          this.login.value.username,
          this.login.value.password]
      ).subscribe((res: any) => {
        // if (res != null) {
        //   this.login_data = res;
        // }
        if (res.error) {
          alert("Login 'ID' or 'Password' incorrect ")
          return;
        }
        else {
          this.login_data = res;
          this.loginser.loginflow(this.login_data.userName);
          this.router.navigate(['home']);
          localStorage.setItem('username', this.login_data.userName);
          localStorage.setItem('password', this.login_data.password);
          console.log(localStorage.getItem('username'));
          console.log(localStorage.getItem('password'));
        }
      })
    }
    else {
      alert("Please fill required fields");
      return;
    }
    // console.log(localStorage.getItem('dataSource'));
  }

}
