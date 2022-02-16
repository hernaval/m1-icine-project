import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseTheaterPage } from './choose-theater.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseTheaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseTheaterPageRoutingModule {}
