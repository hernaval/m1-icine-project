import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardChooserComponent } from './components/card-chooser/card-chooser.component';
import { MovieItemComponent } from './components/movie/movie-item/movie-item.component';

@NgModule({
  imports: [IonicModule.forRoot()],
  declarations: [MovieItemComponent, CardChooserComponent],
  exports: [MovieItemComponent, CardChooserComponent],
})
export class SharedModule {}
