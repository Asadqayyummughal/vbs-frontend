import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path:"", 
    component: FrontendComponent,
    children:[
      {
      path:"home",
      component:HomeComponent
      },
      {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
      },
      {
        path:"**",
        redirectTo:"/home"
      }
    ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
