import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HotelsComponent} from "./pages/hotels/hotels.component";
import {MyHotelComponent} from "./pages/my-hotel/my-hotel.component";
import {ReservationsComponent} from "./pages/reservations/reservations.component";

const routes: Routes = [
  { path: '', redirectTo: '/hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelsComponent },
  { path: 'myHotel', component: MyHotelComponent },
  { path: 'reservations', component: ReservationsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
