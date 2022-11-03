import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor(private http: HttpClient) {}

  userurl = "http://127.0.0.1:8000/api/user/";

  public LoginJsonData(JsonData: string): Observable<any> {
    const URL = this.userurl + "login/"
    const data_body = JsonData
    const header = { 'Content-type': 'application/json; charset=UTF-8' }
    return this.http.post(URL, data_body);
  }

  public RegisterJsonData(JsonData:string): Observable<any>{
    const URL = this.userurl + "register/"
    const data_body = JsonData
    const header = { 'Content-type': 'application/json; charset=UTF-8'}
    return this.http.post(URL, data_body, {headers:header});
  }

  public ChangePasswordJsonData(JsonData:string): Observable<any>{
    const URL = this.userurl + "changepassword/"
    const data_body = JsonData
    const token = JSON.parse(localStorage.getItem('token'))
    const header = { 'Content-type': 'application/json; charset=UTF-8', 'Authorization': 'Bearer '+ token}  
    return this.http.post(URL, data_body); // {headers:header} did not pass
   }

   public ResendPasswordJsonData(JsonData:string): Observable<any>{
    console.log("config service")
    const URL = this.userurl + "send-reset-password-email/"
    const data_body = JsonData
    const header = { 'Content-type': 'application/json; charset=UTF-8'}
    return this.http.post(URL, data_body);
   }

  public getAuthStatus(){
    const token = localStorage.getItem('token');
    if (token) {
      return JSON.parse(token);
    }
    return "";
   }

  getUsers():Observable<any []>{
    const URL = "https://jsonplaceholder.typicode.com/users"
    return this.http.get<any []>(URL);
  }

}
