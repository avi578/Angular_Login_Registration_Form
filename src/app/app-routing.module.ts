import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './Components/menu/menu.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {
    path:'',component:MenuComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
