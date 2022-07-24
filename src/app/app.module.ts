import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilldetailsComponent } from './projectsem2/filldetails/filldetails.component';
import { FooterComponent } from './projectsem2/footer/footer.component';
import { HeaderComponent } from './projectsem2/header/header.component';
import { HomepageComponent } from './projectsem2/homepage/homepage.component';
import { TempOneComponent } from './projectsem2/templets/temp-one/temp-one.component';
import { LandingpageComponent } from './projectsem2/landingpage/landingpage.component';
import {HttpClientModule} from '@angular/common/http'
import { AuthService } from './services/auth.service';
import { loginservice } from './services/login.service';
import { TempTwoComponent } from './projectsem2/templets/temp-two/temp-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    FilldetailsComponent,
    TempOneComponent,
    LandingpageComponent,
    TempTwoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    loginservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
