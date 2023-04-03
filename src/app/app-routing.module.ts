import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { SurveyManagementComponent } from './pages/survey-management/survey-management.component';
import { UsersComponent } from './pages/users/users.component';
import { EditSurveyComponent } from './pages/edit-survey/edit-survey.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { OpenSurveyComponent } from './pages/open-survey/open-survey.component';
import { ResponseSurveyComponent } from './pages/response-survey/response-survey.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'survey', component: SurveyComponent, canActivate: [AuthGuard], data: { title: 'Survey' } },
  { path: 'survey-management', component: SurveyManagementComponent, canActivate: [AuthGuard], data: { title: 'Survey Management' } },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard], data: { title: 'Users Management' } },
  { path: 'response-survey', component: ResponseSurveyComponent, canActivate: [AuthGuard], data: { title: 'Response Survey Management' } },
  { path: 'open-survey', component: OpenSurveyComponent },
  { path: 'edit-survey', component: EditSurveyComponent, canActivate: [AuthGuard] },
  { path: 'edit-user', component: EditUserComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
