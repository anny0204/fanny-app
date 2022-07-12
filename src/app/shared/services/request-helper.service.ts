import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestHelperService {
  public handleRequestFailure(): (httpError: HttpErrorResponse) => Observable<unknown> {
    return (httpError: HttpErrorResponse) => {
        console.error(httpError);

        return throwError(() => httpError);
    }
  }
}
