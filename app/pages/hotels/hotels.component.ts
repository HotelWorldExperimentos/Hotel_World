import { Component, OnInit } from '@angular/core';
import {Hotel} from "../../models/hotel";
import {HotelsService} from "../../services/hotels.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  search:string = '';
  hotels:Hotel[]=[];
  textChanged:boolean=false;

  constructor(private hotelService:HotelsService) { }

  ngOnInit(): void {
    this.getHotels();
  }

  onTextChanged(searchValue:string){
    this.search = searchValue;
    this.textChanged = true;
  }
  getHotels(){
    this.hotelService.getAll().subscribe((response:any)=>{
      this.hotels = response;
    });
  }

}
