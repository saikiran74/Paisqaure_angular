import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdvertiserRoutingModule } from './advertiser.routes';
import { AdvertisementformComponent } from './Ad/advertisementform/advertisementform.component';
import { AdvertiserdashboardComponent } from './advertiserdashboard/advertiserdashboard.component';
import { AdvertiserreportsComponent } from './advertiserreports/advertiserreports.component';
import { AlladvertisementsComponent } from './Ad/alladvertisements/alladvertisements.component';
import { PrimengModule } from '../static/primeng.module';
import { HomepageComponent } from './Ad/advertisements/homepage.component';
import { UseractivitiesComponent } from '../user/useractivities/useractivities.component';
import { ProfileComponent } from '../settings/profile/profile.component';

@NgModule({
  declarations: [
    AdvertisementformComponent,
    HomepageComponent,
    AdvertiserdashboardComponent,
    AdvertiserreportsComponent,
    AlladvertisementsComponent,
    UseractivitiesComponent,
    ProfileComponent,
  ],
  imports: [
    RouterModule.forChild([]),
    AdvertiserRoutingModule,
    PrimengModule
  ]
})
export class AdvertiserModule { }
