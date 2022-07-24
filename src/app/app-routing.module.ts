import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilldetailsComponent } from './projectsem2/filldetails/filldetails.component';
import { FooterComponent } from './projectsem2/footer/footer.component';
import { HeaderComponent } from './projectsem2/header/header.component';
import { HomepageComponent } from './projectsem2/homepage/homepage.component';
import { LandingpageComponent } from './projectsem2/landingpage/landingpage.component';
import { TempOneComponent } from './projectsem2/templets/temp-one/temp-one.component';
import { TempTwoComponent } from './projectsem2/templets/temp-two/temp-two.component';
import { loginservice } from './services/login.service';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'home', component: HomepageComponent ,canActivate:[loginservice]},
  { path: 'filldetails', component: FilldetailsComponent ,canActivate:[loginservice]},
  { path: 'temp_one', component: TempOneComponent ,canActivate:[loginservice]},
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'temp_two', component: TempTwoComponent ,canActivate:[loginservice]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
