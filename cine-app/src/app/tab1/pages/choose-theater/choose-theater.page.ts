import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/components/movie/movie-item/movie-item.component';

@Component({
  selector: 'app-choose-theater',
  templateUrl: './choose-theater.page.html',
  styleUrls: ['./choose-theater.page.scss'],
})
export class ChooseTheaterPage implements OnInit {
  movie: IMovie = {
    id:2,
    title: 'Fast and Furious',
    poster: 'hill.jpg',
    rating: 5
  };

  constructor() { }

  ngOnInit() {
  }

  test(){
    alert('ok');
  }


}
