import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketPaymentPageRoutingModule } from './ticket-payment-routing.module';

import { TicketPaymentPage } from './ticket-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketPaymentPageRoutingModule
  ],
  declarations: [TicketPaymentPage]
})
export class TicketPaymentPageModule {}
