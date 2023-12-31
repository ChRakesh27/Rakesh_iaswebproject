import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share, shareReplay } from 'rxjs';
import { Question } from './model/question';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  API_HOST = 'https://iaswebproject-45w2.onrender.com/api';

  constructor(private httpClient: HttpClient) { }

  getAllQuestion(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.API_HOST + '/questions');
  }

  addQuestion(data: Question): Observable<Question> {
    return this.httpClient.post<Question>(
      this.API_HOST + '/questions',
      data,
    );
  }

  getQuestionById(id: string): Observable<Question> {
    return this.httpClient.get<Question>(`${this.API_HOST}/questions/${id}`);
  }
}
