import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupContainerComponent } from './components/signup-container/signup-container.component';
import { PersonalFormComponent } from './components/signup-container/personal-form/personal-form.component';
import { CompagnieFormComponent } from './components/signup-container/compagnie-form/compagnie-form.component';
import { BusinessFormComponent } from './components/signup-container/business-form/business-form.component';
import { LegalFormComponent } from './components/signup-container/legal-form/legal-form.component';
import { FinalInfoComponent } from './components/signup-container/final-info/final-info.component';
import { SigninContainerComponent } from './components/signin-container/signin-container.component';
import { SigninFormComponent } from './components/signin-container/signin-form/signin-form.component';
import { ForgetPasswordComponent } from './components/signin-container/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/signin-container/reset-password/reset-password.component';
import { NewPasswordComponent } from './components/signin-container/new-password/new-password.component';
import {
  signupCompagnieFormGuard,
  signupPersonnalFormGuard,
} from './share/guards/signup.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'sign-in',
    component: SigninContainerComponent,
    children: [
      { path: '', component: SigninFormComponent },
      { path: 'forget', component: ForgetPasswordComponent },
      { path: 'code', component: ResetPasswordComponent },
      { path: 'new-password', component: NewPasswordComponent },
    ],
  },
  {
    path: 'sign-up',
    component: SignupContainerComponent,
    children: [
      { path: '', component: PersonalFormComponent },
      {
        path: 'compagnie',
        component: CompagnieFormComponent,
        // canActivate: [signupPersonnalFormGuard],
      },
      {
        path: 'business',
        component: BusinessFormComponent,
        // canActivate: [signupCompagnieFormGuard],
      },
      { path: 'legal', component: LegalFormComponent },
      { path: 'final-signup', component: FinalInfoComponent },
    ],
  },
  { path: '**', redirectTo: 'sign-in' },
  // { path: '**', component: SigninComponent },
];
