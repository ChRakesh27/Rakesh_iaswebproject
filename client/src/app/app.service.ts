import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  API_BASE = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }


}
