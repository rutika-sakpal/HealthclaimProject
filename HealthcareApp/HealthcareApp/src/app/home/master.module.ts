import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MasterComponent } from '../master/master.component';
import { Mainroutes } from '../routing/mainroutes';
import { HomeComponent } from './home.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginServiceService } from '../services/login-service.service';
import { AddmemberComponent } from '../addmember/addmember.component';
import { MemberComponent } from '../member/member.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ClaimComponent } from '../claim/claim.component';




@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent,
    LoginComponent,
    RegistrationComponent,
    AddmemberComponent,
    MemberComponent,
    ClaimComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(Mainroutes)
  ],
  providers: [LoginServiceService,{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService],
  bootstrap: [MasterComponent]
})
export class MasterModule { }
