import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './model/question';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  API_HOST = "http://localhost:3000/api"
  constructor(private httpClient: HttpClient) { }

  getAllQuestion(): Observable<Question> {
    return this.httpClient.get<Question>(this.API_HOST + "/question/");
  }

  addQuestion(data: Question): Observable<Question> {
    return this.httpClient.post<Question>(this.API_HOST + "/question/", data)
  }
  getQuestionById(id: Question): Observable<Question> {
    return this.httpClient.get<Question>(this.API_HOST + "/question/" + id);
  }

}
