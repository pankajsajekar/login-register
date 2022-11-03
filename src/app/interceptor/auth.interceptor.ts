import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TokenService } from '../services/token.service';
import { ConfigServiceService } from '../services/config-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenService:TokenService, private ConfigServiceService: ConfigServiceService) { }

    handleError(error: HttpErrorResponse){
        return throwError(error);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log("interceptor call");

        var authorisedToken = this.ConfigServiceService.getAuthStatus();
        if (authorisedToken){
            const headers = new HttpHeaders({
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${authorisedToken}`
              })
            const clone = request.clone({
                headers: headers
            })
            return next.handle(clone).pipe(
                retry(1),
                catchError(this.handleError)
            );
        }

        const headers = new HttpHeaders({
            'Content-type': 'application/json; charset=UTF-8'
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
