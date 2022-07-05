import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core'; // at top

@Injectable({
    providedIn: 'root' // just before your class
})

export class loginservice {

    constructor() { }
    logindata: any;

    loginflow(data: any) {
        if (data != null) {
            this.logindata = data;
        }
        else {
            this.logindata = "no value found";
        }
        return this.logindata
    }


}