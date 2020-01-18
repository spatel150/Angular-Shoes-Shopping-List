import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ShoeList } from './shoe';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  private shoeUrl = 'api/shoes/shoes.json';

  constructor(private http: HttpClient) {

  }

  getShoes(): Observable<ShoeList[]> {
    return this.http.get<ShoeList[]>(this.shoeUrl).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = "An error occured: $(err.error.message)";
    } else {
      errorMessage = "Server returned code: $(err.status), error message is: $(error.message)";
    }
    console.error(errorMessage);
    return throwError(errorMessage)
  }
}
