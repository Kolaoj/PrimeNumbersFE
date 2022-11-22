import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrimeNumbersService {

  baseurl = 'https://localhost:7274';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  GetPrimeNumbers(primeNumbersupTo: number): Observable<number[]> {
    return this.http
      .get<number[]>(this.baseurl + '/GeneratePrimeNumbers/' + primeNumbersupTo)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(()=>error.error);
}
}
