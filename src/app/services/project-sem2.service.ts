import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core'; // at top

@Injectable({
    providedIn: 'root' // just before your class
})

export class project_sem2 {

    constructor() { }
    visibledata: any;

    dataflow(data: any) {
        if (data != null) {
            this.visibledata = data;
        }
        else {
            this.visibledata = "no value found";
        }
        return this.visibledata
    }


}