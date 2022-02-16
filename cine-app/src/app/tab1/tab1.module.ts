import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { MovieCategoryComponent } from './movie-category/movie-category.component';
import { SharedModule } from '../shared.module';
import { ChooseTheaterPage } from './pages/choose-theater/choose-theater.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    SharedModule
  ],
  declarations: [Tab1Page, ChooseTheaterPage, MovieCategoryComponent]
})
export class Tab1PageModule {}
