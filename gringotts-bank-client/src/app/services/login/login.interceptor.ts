import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
    headerAuthorization = 'x-access-token';
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');

        if (token) {
            const cloned = req.clone({
                headers: req.headers.set(this.headerAuthorization, token)
            });
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }

}
