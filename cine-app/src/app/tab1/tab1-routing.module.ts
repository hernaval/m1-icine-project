import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseTheaterPage } from './pages/choose-theater/choose-theater.page';
import { MovieDetailPage } from './pages/movie-detail/movie-detail.page';
import { TicketPaymentPage } from './pages/ticket-payment/ticket-payment.page';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'movie-detail/:id',
    component: MovieDetailPage,
  },
  {
    path: 'choose',
    component: ChooseTheaterPage
  },
  {
    path: 'ticket-payment/:id',
    component: TicketPaymentPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
