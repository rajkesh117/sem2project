import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core'; // at top
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root' // just before your class
})

export class loginservice implements CanActivate{

    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.logindata != null){
            return true
        }
        else{
            return false
        }
    }
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