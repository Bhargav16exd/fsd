import { Routes } from '@angular/router';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { PricingComponent } from './pricing/pricing.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


export const routes: Routes = [
    {path: '', component: LandingpageComponent , title: 'Landingpage'},
    {path: 'pricing', component: PricingComponent , title: 'Pricing'},
    {path: 'signin' , component: SigninComponent , title: 'Signin'},
    {path: 'signup' , component: SignupComponent , title: 'Signup'}
];
