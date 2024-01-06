import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { 
    path:"", 
    component: FrontendComponent,
    children:[
      {
      path:"home",
      component:ServicesComponent,
      },
      {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
      },
      // {
      //   path:"services",
      //   redirectTo:"services",
      //   component:ServicesComponent,
      // },
      {
        path:"**",
        redirectTo:"/services"
      }
    ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
