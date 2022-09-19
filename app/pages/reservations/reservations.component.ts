import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ReservationsService} from "../../services/reservations.service";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  dataSource:MatTableDataSource<any>;
  displayedColumns: string[] = ['reservations'];

  constructor(private reservationService:ReservationsService) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.getReservationsForCustomer();
  }

  getReservationsForCustomer(){
    this.reservationService.getAllForCustomer(1).subscribe((response:any)=>{
      this.dataSource.data = response;
    });
  }

}
