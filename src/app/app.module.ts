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
import { CompetitionHomeComponent } from './competition/competition-home/competition-home.component';
import { CompetitionListComponent } from './competition/competition-list/competition-list.component';
import { CompetitionDetailComponent } from './competition/competition-detail/competition-detail.component';
import { FirstComponent } from './accommodation/first/first.component';
import { SecondComponent } from './accommodation/second/second.component';
import { ThirdComponent } from './accommodation/third/third.component';
import { FourthComponent } from './accommodation/fourth/fourth.component';
import { FifthComponent } from './accommodation/fifth/fifth.component';

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
    SponsorsComponent,
    CompetitionHomeComponent,
    CompetitionListComponent,
    CompetitionDetailComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      


      {path:'',component:HomeComponent},
      {path:'accommodation',component:AccommodationComponent,
      children: [
        {path: 'reach us', component: FirstComponent},
        {path: 'prizes & lyps', component: SecondComponent},
        {path: 'faq', component: ThirdComponent},
        {path: 'register', component: FourthComponent},
        {path: 'previous winners', component: FifthComponent},
      ]
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
        children: [
          {path: '', component: CompetitionHomeComponent },
          {path: ':compiName', component: CompetitionListComponent},
          {
            path: ':compiName/:eventName',
            component: CompetitionDetailComponent,
            children: [
              {path: '', redirectTo: 'comp-desc', pathMatch:'full'},
              // {path: 'comp-desc', component:CompDescRulesComponent},
              // {path: 'comp-prizes', component:CompPrizesComponent},
              // {path: 'comp-faq', component:CompFaqComponent},
              // {path: 'comp-reg', component:CompRegComponent},
              // {path: 'comp-prev-winner', component:CompPrevWinnerComponent},
            ]
          },
      ],
    },
  ]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
