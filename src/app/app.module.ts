import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';

import { SurveyService } from './survey.service';
import { SurveyManagementComponent } from './pages/survey-management/survey-management.component';

import { HttpClientModule } from '@angular/common/http';

import { EditSurveyComponent } from './pages/edit-survey/edit-survey.component'
import { FormsModule } from "@angular/forms";
// Added for security
import { JwtModule } from '@auth0/angular-jwt';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}
// End of security code

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    HomeComponent,
    SurveyComponent,
    EditSurveyComponent,
    SurveyManagementComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // Added for security
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        //whitelistedDomains: ['localhost:3000'], // Change this for production
        //blacklistedRoutes: ['localhost:3000/users/signIn'] // Change this for production
      }
    })
    // End of security code
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
