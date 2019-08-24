import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { CompetitionComponent } from './competition/competition.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { FaqsComponent } from './faqs/faqs.component';
import { RegistrationComponent } from './registration/registration.component';
import { SponsorsComponent } from './sponsors/sponsors.component';


import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccommodationComponent,
    CompetitionComponent,
    ContactComponent,
    EventsComponent,
    FaqsComponent,
    RegistrationComponent,
    SponsorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      


      {path:'',component:HomeComponent},
      {path:'accommodation',component:AccommodationComponent,

    },
      
      {
        path:'registration',
        component:RegistrationComponent,
       
      },
      {path:'events',component:EventsComponent,
     
    },
      {path:'faqs',component:FaqsComponent},
      {path:'sponsors',component:SponsorsComponent},
      {path:'contact',component:ContactComponent},
      {
        path:'competition',
        component:CompetitionComponent,
        
      },
    ]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
