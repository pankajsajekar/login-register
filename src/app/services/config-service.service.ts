import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor(private http: HttpClient) {}

  public LoginJsonData(JsonData: string): Observable<any> {
    const URL1 = "http://127.0.0.1:8000/login-api/"
    const data_body = JsonData
    const header = { 'Content-type': 'application/json; charset=UTF-8' }
    return this.http.post(URL1, data_body, {headers:header});
  }

  public RegisterJsonData(JsonData:string): Observable<any>{
    const URL = "http://127.0.0.1:8000/register-api/"
    const data_body = JsonData
    const header = { 'Content-type': 'application/json; charset=UTF-8'}
    return this.http.post(URL, data_body, {headers:header});
  }

  getUsers(){
    const URL = "https://jsonplaceholder.typicode.com/users"
    return this.http.get(URL);
  }
}
