import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from '../components/movie/movie-item/movie-item.component';
import { ICategory } from './movie-category/movie-category.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  action: ICategory = {
    id:1,
    name: 'action',
    emoji: '😀'
  };

  horror: ICategory = {
    id:2,
    name: 'horror',
    emoji: '😀'
  };

  movie: IMovie = {
    id:2,
    title: 'Fast and Furious',
    poster: 'hill.jpg',
    rating: 5
  };
  constructor(private router: Router) {}

  goToDetail(movie: IMovie): void {
    this.router.navigateByUrl(`/tabs/tab1/movie-detail/${movie.id}`);
  }

}
