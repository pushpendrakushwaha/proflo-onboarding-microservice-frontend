import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class Interceptor {
    constructor(public cookieService: CookieService) { }
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //     const customReq = request.clone({
  //       setHeaders: {
  //           Authorization: `Bearer ${this.cookieService.get('proflo-user-token')}`
  //   }});
  //   return next.handle(customReq);
  // }
}
