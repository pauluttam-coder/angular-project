import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions: any = { headers: HttpHeaders };
  private _apiBaseUrl = environment.apiBaseUrl;
  public _csrfToken: any;
  public _userDetails: any;

  constructor(
    private _http: HttpClient
  ) {
    //Set header
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  //GET API call
  get(path: any): Observable<any> {
    return this._http.get(`${this._apiBaseUrl}${path}`, { headers: this.httpOptions.headers })
      .pipe(catchError(this.formatErrors));
  }

  //
  private formatErrors(error: any): any {
    return throwError(() => new Error(error.error));
  }
}
