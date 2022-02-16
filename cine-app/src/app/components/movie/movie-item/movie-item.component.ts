import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


export interface IMovie {
  id: number;
  poster: string;
  title: string;
  rating: number;
}

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {

  @Input() movie: IMovie;
  @Output() requestDetailEvent = new EventEmitter<IMovie> ();
  constructor(private router: Router) { }

  ngOnInit() {}

  viewDetail(movie: IMovie): void {
    this.requestDetailEvent.emit(movie);
  }

}
