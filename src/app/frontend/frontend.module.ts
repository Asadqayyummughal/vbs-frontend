import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SepcialitiesComponent } from './sepcialities/sepcialities.component';
import { NewsComponent } from './news/news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    FrontendComponent,
    HomeComponent,
    ServicesComponent,
    SepcialitiesComponent,
    NewsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
