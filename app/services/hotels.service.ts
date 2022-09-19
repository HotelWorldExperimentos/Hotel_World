import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import { Injectable } from '@angular/core';
import {Hotel} from "../models/hotel";


@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  basePath = "http://localhost:3000/hotels"

  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private http:HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error ( `Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError( ()  => new Error('Something happened with request, please try again later'));
  }

  getAll():Observable<Hotel>{
    return this.http.get<Hotel>(this.basePath, this.httpOptions).
    pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getForManager(managerId: number):Observable<any>{
    return this.http.get<any>(`${this.basePath}?managerId=${managerId}`, this.httpOptions)
      .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

}
