import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxQRCodeModule } from 'ngx-qrcode2';

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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompetitionHomeComponent } from './competition/competition-home/competition-home.component';
import { CompetitionListComponent } from './competition/competition-list/competition-list.component';
import { CompetitionDetailComponent } from './competition/competition-detail/competition-detail.component';
import { FirstComponent } from './accommodation/first/first.component';
import { SecondComponent } from './accommodation/second/second.component';
import { ThirdComponent } from './accommodation/third/third.component';
import { FourthComponent } from './accommodation/fourth/fourth.component';
import { FifthComponent } from './accommodation/fifth/fifth.component';
import { ReghomeComponent } from './registration/reghome/reghome.component';
import { RegformComponent } from './registration/regform/regform.component';
import { RegprofileComponent } from './registration/regprofile/regprofile.component';
import { EventsHomeComponent } from './events/events-home/events-home.component';
import { LottieAnimationViewModule } from 'ng-lottie';

import { CollegelistPipe } from './registration/regform/collegelist.pipe';
import { ClickOutsideModule } from 'ng-click-outside';
import { CompDescRulesComponent } from './competition/competition-detail/comp-desc-rules/comp-desc-rules.component';
import { CompFaqComponent } from './competition/competition-detail/comp-faq/comp-faq.component';
import { CompPrevWinnerComponent } from './competition/competition-detail/comp-prev-winner/comp-prev-winner.component';
import { CompPrizesComponent } from './competition/competition-detail/comp-prizes/comp-prizes.component';
import { CompRegComponent } from './competition/competition-detail/comp-reg/comp-reg.component';
import { CompetitionsandlypComponent } from './contact/competitionsandlyp/competitionsandlyp.component';
import { CreativesComponent } from './contact/creatives/creatives.component';
import { FoodandbeveragesComponent } from './contact/foodandbeverages/foodandbeverages.component';
import { HorizonsComponent } from './contact/horizons/horizons.component';
import { InformalsandworkshopsComponent } from './contact/informalsandworkshops/informalsandworkshops.component';
import { MarketingComponent } from './contact/marketing/marketing.component';
import { MediaandpublicityComponent } from './contact/mediaandpublicity/mediaandpublicity.component';
import { PronitesComponent } from './contact/pronites/pronites.component';
import { LogisticsandoperationsComponent } from './contact/logisticsandoperations/logisticsandoperations.component';
import { HospitalityComponent } from './contact/hospitality/hospitality.component';
import { OcComponent } from './contact/oc/oc.component';
import { FirstFaqComponent } from './faqs/first-faq/first-faq.component';
import { SecondFaqComponent } from './faqs/second-faq/second-faq.component';
import { ThirdFaqComponent } from './faqs/third-faq/third-faq.component';
import { FourthFaqComponent } from './faqs/fourth-faq/fourth-faq.component';
import { FifthFaqComponent } from './faqs/fifth-faq/fifth-faq.component';
import { SixthComponent } from './accommodation/sixth/sixth.component';
import { SixthfaqComponent } from './faqs/sixthfaq/sixthfaq.component';
import { EventtabComponent } from './events/eventtab/eventtab.component';



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
    FifthComponent,
    ReghomeComponent,
    RegformComponent,
    RegprofileComponent,
    EventsHomeComponent,
    CollegelistPipe,
    CompDescRulesComponent,
    CompFaqComponent,
    CompPrevWinnerComponent,
    CompPrizesComponent,
    CompRegComponent,
    CompetitionsandlypComponent,
    CreativesComponent,
    FoodandbeveragesComponent,
    HorizonsComponent,
    InformalsandworkshopsComponent,
    MarketingComponent,
    MediaandpublicityComponent,
    PronitesComponent,
    LogisticsandoperationsComponent,
    HospitalityComponent,
    OcComponent,
    FirstFaqComponent,
    SecondFaqComponent,
    ThirdFaqComponent,
    FourthFaqComponent,
    FifthFaqComponent,
    SixthComponent,
    SixthfaqComponent,
    EventtabComponent
  ],
  imports: [

    FormsModule,
    LottieAnimationViewModule.forRoot(),
    BrowserModule,
    ClickOutsideModule,
    BrowserAnimationsModule,
    NgxQRCodeModule,
    RouterModule.forRoot([



      {path:'',component:HomeComponent},
      {path:'accommodation',component:AccommodationComponent,
      children: [

        {path: '', redirectTo: 'reach us', pathMatch:'full'},
        {path: 'reach us', component: FirstComponent},
        {path: 'prizes & lyps', component: SecondComponent},
        {path: 'faq', component: ThirdComponent},
        {path: 'register', component: FourthComponent},
        {path: 'previous winners', component: FifthComponent},
        {path: 'sixth', component: SixthComponent},
      ]
    },

      {
        path:'register',
        component:RegistrationComponent,
        children: [
          {path: '', component: ReghomeComponent},
          {path: 'form', component: RegformComponent},
          {path: 'profile', component: RegprofileComponent},
        ]

      },
      {path: 'events',
        component: EventsComponent,
        children: [
          {path: '', component: EventsHomeComponent},
            {path: 'detail', component: EventtabComponent }
        ]
    },
      {path:'faqs',component:FaqsComponent,
      children: [
        {path: '', redirectTo: 'reach us', pathMatch:'full'},
        {path: 'reach us', component: FirstFaqComponent},
        {path: 'prizes & lyps', component: SecondFaqComponent},
        {path: 'faq', component: ThirdFaqComponent},
        {path: 'register', component: FourthFaqComponent},
        {path: 'previous winners', component: FifthFaqComponent},
        {path: 'sixth', component: SixthfaqComponent},
      ]
    },
      {path:'sponsors',component:SponsorsComponent},
      {path:'contact',component:ContactComponent,
        children: [

           {path: '', redirectTo: 'competitions & lyp', pathMatch:'full'},
          {path: 'competitions & lyp', component: CompetitionsandlypComponent, data: {animation: 'Competitions'} },
          {path: 'creatives', component: CreativesComponent, data: {animation: 'Creatives'} },
          {path: 'food & beverages', component: FoodandbeveragesComponent, data: {animation: 'Food'} },
          {path: 'horizons', component: HorizonsComponent, data: {animation: 'Horizons'} },
          {path: 'informals & workshops', component: InformalsandworkshopsComponent, data: {animation: 'Informals'} },
          {path: 'marketing', component: MarketingComponent, data: {animation: 'Marketing'} },
          {path: 'media & publicity', component: MediaandpublicityComponent, data: {animation: 'Media'} },
          {path: 'pronites', component: PronitesComponent, data: {animation: 'Pronites'} },
          {path: 'logistics & operations', component: LogisticsandoperationsComponent, data: {animation: 'Logistics'} },
          {path: 'hospitality', component: HospitalityComponent, data: {animation: 'Hospitality'} },
          {path: 'oc', component: OcComponent, data: {animation: 'Oc'} },
        ]
      },
      {
        path:'competitions',
        component:CompetitionComponent,
        children: [
          
          {path: '', component: CompetitionHomeComponent },
          {path: ':compiName', component: CompetitionListComponent},
          {
            path: ':compiName/:eventName',
            component: CompetitionDetailComponent,
            children: [
              {path: '', redirectTo: 'comp-desc', pathMatch:'full'},
              {path: 'comp-desc', component:CompDescRulesComponent},
              {path: 'comp-prizes', component:CompPrizesComponent},
              {path: 'comp-faq', component:CompFaqComponent},
              {path: 'comp-reg', component:CompRegComponent},
              {path: 'comp-prev-winner', component:CompPrevWinnerComponent},
            ]
          },
      ],
    },
    {path: 'vogue', redirectTo: 'competitions/Lifestyle/Vogue', pathMatch:'full'},
      
  ]),

    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
