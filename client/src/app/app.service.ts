import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  API_HOST = "http://localhost:3000/api"
  constructor(private httpClient: HttpClient) { }

  getAllQuestion(): Observable<any> {
    return this.httpClient.get<any>(this.API_HOST + "/admin/");
  }

  addQuestion(data: any): Observable<any> {
    return this.httpClient.post<any>(this.API_HOST + "/admin/", data)
  }
  getQuestionById(id: any): Observable<any> {
    return this.httpClient.get<any>(this.API_HOST + "/admin/" + id);
  }

}
