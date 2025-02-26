import { Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [
    {path: '', component: LandingpageComponent , title: 'Landingpage'},
    {path:'pricing', component: PricingComponent, title: 'Pricing'}
];
