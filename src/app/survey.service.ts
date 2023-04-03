import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private readonly baseUrl = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) { }

  saveSurvey(survey) {
    return this.httpClient.post(`${this.baseUrl}/survey/create`, survey);
  }

  updateSurvey(survey) {
    return this.httpClient.post(`${this.baseUrl}/survey/update`, survey);
  }

  getSurveys() {
    return this.httpClient.get(`${this.baseUrl}/survey`);
  }

  deleteSurvey(id) {
    return this.httpClient.post(`${this.baseUrl}/survey/delete`, { _id: id });
  }
}
