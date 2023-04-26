import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { HomeComponent } from './MyComponents/home/home.component';

const routes: Routes = [
  {component:HomeComponent,path:"home"},
  {component:LoginComponent,path:"login"},
  {component:SignupComponent,path:"signup"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
