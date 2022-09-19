import { Component, OnInit } from '@angular/core';
import {HotelsService} from "../../services/hotels.service";
import {RoomsService} from "../../services/rooms.service";
import {MatTableDataSource} from "@angular/material/table";
import {Hotel} from "../../models/hotel";
import {MatDialog} from "@angular/material/dialog";
import {DialogReservationComponent} from "../dialog-reservation/dialog-reservation.component";



@Component({
  selector: 'app-my-hotel',
  templateUrl: './my-hotel.component.html',
  styleUrls: ['./my-hotel.component.css']
})
export class MyHotelComponent implements OnInit {

  dataSource:MatTableDataSource<any>;
  displayedColumns: string[] = ['rooms'];

  constructor(private hotelService:HotelsService, private roomService:RoomsService,public dialog:MatDialog) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.hotelService.getForManager(1).subscribe((response:any)=>{
      this.getRoomsForHotel(response[0].id);
    });

  }

  getRoomsForHotel(id:number){
    this.roomService.getAllForHotel(id).subscribe((response:any)=>{
      this.dataSource.data = response;
    });
  }

  makeReservation(){

  }

  openDialog(room:any){
    let dialogRef = this.dialog.open(DialogReservationComponent, {
      width: '400px',
      height: '600px',
      data:{room:room}
    });
  }
}
