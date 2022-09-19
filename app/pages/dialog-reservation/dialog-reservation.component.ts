import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-reservation',
  templateUrl: './dialog-reservation.component.html',
  styleUrls: ['./dialog-reservation.component.css']
})
export class DialogReservationComponent implements OnInit {

  date:Date = new Date();
  dateString:string = '';
  hours=['17:00','18:00']
  constructor(public dialogRef: MatDialogRef<DialogReservationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  changeDate(day:any,month:any,year:any):void{
    this.dateString = day+'-'+month+'-'+year;
  }
  changeHour(id:any):void{
    this.dateString+=' '+this.hours[id];
  }
  close():void{
    this.dialogRef.close();
  }

}
