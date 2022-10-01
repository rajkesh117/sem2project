import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { project_sem2 } from '../../services/project-sem2.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FillDetailsDialogComponent } from 'src/app/dialogs/fill-details-dialog/fill-details-dialog.component';


@Component({
  selector: 'app-filldetails',
  templateUrl: './filldetails.component.html',
  styleUrls: ['./filldetails.component.css']
})
export class FilldetailsComponent implements OnInit {
  requiredForm: any;
  data: any;
  data2: any;
  filldetails: any;
  PG: any;
  Job: any;
  showpg: boolean | undefined;
  showjob: boolean | undefined;
  filldata: any;

  constructor(private fb: FormBuilder, private project_sem2: project_sem2, private router: Router, public dialog: MatDialog) {
    this.myForm();
  }

  ngOnInit(): void {
    if(localStorage.getItem('formdetails') != null){
      this.filldata=localStorage.getItem('formdetails');
      this.filldata=JSON.parse(this.filldata);
    }
    this.data2 = localStorage.getItem('formdetails');
    this.data2 = JSON.parse(this.data2);
    if (localStorage.getItem('filldetails') == null) {
      this.openDialog();
    }
    if (localStorage.getItem('filldetails') == 'true') {
      this.filldetails = true;
    }
    this.formdisplay();
  }

  formdisplay() {
    this.PG = localStorage.getItem('PG');
    this.PG = JSON.parse(this.PG);
    this.Job = localStorage.getItem('job');
    this.Job = JSON.parse(this.Job);

    if (this.PG == "yes") {
      this.showpg = true;
    }
    else{
      this.showpg = false;
    }
    if (this.Job == "yes") {
      this.showjob = true;
    }
    else{
      this.showjob = false;
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FillDetailsDialogComponent, {
      width: '300px',
      height: '250px',
      data: {
        name: localStorage.getItem('username'),
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      // Do stuff after the dialog has closed
      this.filldetails = true;
      this.formdisplay();
    });
  }
  get formdata() {
    return this.data2;
  }

  myForm() {
    this.requiredForm = this.fb.group({
      //personal details------------
      userid: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      mobile: ['', Validators.required],
      about: ['', Validators.required],
      //----------------
      //Educational details for graduation
      g_collegename: ['', Validators.required],
      g_degreename: ['', Validators.required],
      g_sgpa: ['', Validators.required],
      //----------
      //Educational details for post-graduation
      p_collegename: [''],
      p_degreename: [''],
      p_sgpa: [''],
      //--------------------------------------
      // primary skills
      p_skill_no1: ['', Validators.required],
      p_skill_no2: ['', Validators.required],
      p_skill_no3: ['', Validators.required],
      p_skill_no4: ['', Validators.required],
      //------------------------
      // computer skills
      c_skill_no1: ['', Validators.required],
      c_skill_no2: ['', Validators.required],
      c_skill_no3: ['', Validators.required],
      c_skill_no4: ['', Validators.required],
      //-----------------
      // experience data
      position_name: [''],
      position_description: [''],
      //-----------------
      hobbies: ['', Validators.required],
      strength: ['', Validators.required],
    });
  }

  details() {
    this.data = this.requiredForm.value;
    if (this.requiredForm.valid) {
      this.data = this.requiredForm.value;
      // localStorage.setItem("formdetails", this.data);
      localStorage.setItem('formdetails', JSON.stringify(this.data));
      // this.project_sem2.dataflow(this.data);
      this.router.navigate(['temp_one']);
    }
    else {
      alert("please fill all the details");
      return;
    }
  }

}
