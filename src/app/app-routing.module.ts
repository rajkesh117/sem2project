import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilldetailsComponent } from './filldetails/filldetails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TempletoneComponent } from './templetone/templetone.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'tempone', component: TempletoneComponent },
  { path: 'filldetails', component: FilldetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
