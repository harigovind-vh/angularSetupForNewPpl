import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from '@env/environment';

import { catchError, map } from 'rxjs/operators';
import { RequestOptions } from '../models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, options: RequestOptions): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, options);
  }

  put(
    path: string,
    body: Object = {},
    options: RequestOptions
  ): Observable<any> {
    return this.http
      .put(`${this.apiUrl}${path}`, JSON.stringify(body), options)
      .pipe(catchError(this.formatErrors));
  }

  post(
    path: string,
    body: Object = {},
    options: RequestOptions
  ): Observable<any> {
    return this.http
      .post(`${this.apiUrl}${path}`, JSON.stringify(body), options)
      .pipe(catchError(this.formatErrors));
  }

  postFile(
    path: string,
    body: Object = {},
    options: RequestOptions
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}${path}`, body, options).pipe(
      map((res: any) => res.data),
      catchError(this.formatErrors)
    );
  }

  delete(path: string, options: RequestOptions): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}${path}`, options)
      .pipe(catchError(this.formatErrors));
  }
}
