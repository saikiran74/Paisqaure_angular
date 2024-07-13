import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlladvertisementsComponent } from './Ad/alladvertisements/alladvertisements.component';
import { UseractivitiesComponent } from '../user/useractivities/useractivities.component';
import { AdvertiserdashboardComponent } from './advertiserdashboard/advertiserdashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AdvertiserreportsComponent } from './advertiserreports/advertiserreports.component';
import { AdvertisementformComponent } from './Ad/advertisementform/advertisementform.component';
import { LandingcontentComponent } from '../landingpage/landingcontent/landingcontent.component';
import { ProfileComponent } from '../settings/profile/profile.component';
const routes: Routes = [
  {
    path:'',
    component:NavbarComponent,
    children:[
      { path: '', component: AlladvertisementsComponent },
      { path: 'advertiserdashboard', component: AdvertiserdashboardComponent },
      { path: 'advertiserreport',component:AdvertiserreportsComponent},
      { path: 'advertise',component:AdvertisementformComponent},
      { path: 'myadvertisement/:id',component:AlladvertisementsComponent},
      { path: 'block/:id', component: LandingcontentComponent },
      { path: 'reportadvertisement/:id', component: LandingcontentComponent },
      { path: 'save/:id', component: LandingcontentComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AdvertiserRoutingModule {}
