import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoTheaterAvailability(): void {
    this.router.navigateByUrl(`/tabs/tab1/choose`);
  }

}
