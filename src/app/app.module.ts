import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { CommonService } from './common.service';
import { SurveyService } from './survey.service';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { OpenSurveyComponent } from './pages/open-survey/open-survey.component';
import { EditSurveyComponent } from './pages/edit-survey/edit-survey.component';
import { ResponseSurveyComponent } from './pages/response-survey/response-survey.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UsersComponent } from './pages/users/users.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { SurveyManagementComponent } from './pages/survey-management/survey-management.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    BasePageComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SurveyComponent,
    OpenSurveyComponent,
    EditSurveyComponent,
    ResponseSurveyComponent,
    LoginComponent,
    RegistrationComponent,
    UsersComponent,
    EditUserComponent,
    SurveyManagementComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        //whitelistedDomains: ['localhost:3000'], // Change this for production
        //blacklistedRoutes: ['localhost:3000/users/signIn'] // Change this for production
      },
    }),
    AppRoutingModule,
  ],
  providers: [
    CommonService,
    SurveyService,
    UserService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
