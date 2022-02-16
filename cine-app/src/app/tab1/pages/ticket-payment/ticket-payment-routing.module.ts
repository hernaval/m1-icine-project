import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketPaymentPage } from './ticket-payment.page';

const routes: Routes = [
  {
    path: '',
    component: TicketPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketPaymentPageRoutingModule {}
