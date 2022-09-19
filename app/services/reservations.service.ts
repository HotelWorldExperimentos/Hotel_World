import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  basePath="http://localhost:3000/reservations"

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

  getAll():Observable<Reservation>{
    return this.http.get<Reservation>(this.basePath, this.httpOptions).
    pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getAllForHotel(hotelId:number):Observable<any>{
    return this.http.get<Reservation>(`${this.basePath}?hotelId=${hotelId}`, this.httpOptions).
    pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getAllForCustomer(customerId):Observable<any>{
    return this.http.get<Reservation>(`${this.basePath}?customerId=${customerId}&_expand=room`, this.httpOptions).
    pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}
