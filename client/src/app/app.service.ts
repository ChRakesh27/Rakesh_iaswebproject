import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './model/question';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  API_HOST = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) { }

  getAllQuestion(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.API_HOST + '/questions/');
  }

  addQuestion(data: Question, file: any): Observable<Question> {
    const formData = new FormData()

    formData.append('que-image', file)
    formData.append('data', JSON.stringify(data))

    return this.httpClient.post<Question>(this.API_HOST + '/questions/', formData);
  }
  getQuestionById(id: Question): Observable<Question> {
    return this.httpClient.get<Question>(this.API_HOST + '/questions/' + id);
  }
}
