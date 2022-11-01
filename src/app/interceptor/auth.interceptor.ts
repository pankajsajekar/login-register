import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TokenService } from '../services/token.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenService:TokenService) { }

    handleError(error: HttpErrorResponse){
        return throwError(error);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler) {

        console.log("interceptor call")
        
        // return next.handle(request);
        // let token = ' '

        // const token = JSON.parse(localStorage.getItem('token'))
        const token = JSON.parse(this.tokenService.getToken());
        console.log(token)
        const headers = new HttpHeaders({
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`
          })

        
        const clone = request.clone({
            headers: headers
        })

        return next.handle(clone).pipe(
            retry(1),
            catchError(this.handleError)
        );
        
    }
}
