import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilldetailsComponent } from './projectsem2/filldetails/filldetails.component';
import { FooterComponent } from './projectsem2/footer/footer.component';
import { HeaderComponent } from './projectsem2/header/header.component';
import { HomepageComponent } from './projectsem2/homepage/homepage.component';
import { TempOneComponent } from './projectsem2/templets/temp-one/temp-one.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'filldetails', component: FilldetailsComponent },
  { path: 'temp_one', component: TempOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
