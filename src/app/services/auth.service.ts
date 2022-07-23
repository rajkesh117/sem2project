import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:44344/api/";

  registeruser(user: Array<string>) {
    return this.http.post(this.baseurl + "user/CreateUser",{
      UserID: user[0],
      UserName: user[1],
      Email: user[2],
      Password: user[3],
    },
      {
        responseType: 'text',
      }
    );
  }
  loginuser(user: Array<string>) {
    return this.http.post(this.baseurl + "user/login",{
      UserName: user[0],
      Password: user[1],
    },
      {
        responseType: 'json',
      }
    );
  }
}
