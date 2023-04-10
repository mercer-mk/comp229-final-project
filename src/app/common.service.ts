import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private readonly baseUrl = 'https://final-project-jl4d.onrender.com/api/survey_response';

  constructor(private httpClient: HttpClient) { }

  saveSurvey(survey) {
    return this.httpClient.post(this.baseUrl, survey);
  }

  updateSurvey(survey) {
    return this.httpClient.post(`${this.baseUrl}/${survey._id}`, survey);
  }

  getSurveys(surveyId) {
    return this.httpClient.post(`${this.baseUrl}/list/${surveyId}`, surveyId);
  }

  deleteSurvey(id) {
    return this.httpClient.post(`${this.baseUrl}/delete`, { _id: id });
  }
}
