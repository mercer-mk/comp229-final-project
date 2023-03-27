import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { SurveyManagementComponent } from './pages/survey-management/survey-management.component';
import { EditSurveyComponent } from './pages/edit-survey/edit-survey.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'survey', component: SurveyComponent, data: { title: 'Survey' } },
  { path: 'survey-management', component: SurveyManagementComponent, data: { title: 'Survey Management' } },

  { path: 'edit-survey', component: EditSurveyComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
