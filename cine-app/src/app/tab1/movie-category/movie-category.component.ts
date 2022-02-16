import { Component, Input, OnInit } from '@angular/core';

export interface ICategory {
  id: number;
  emoji: any;
  name: string;
}

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss'],
})
export class MovieCategoryComponent implements OnInit {
  @Input() category: ICategory;
  constructor() { }

  ngOnInit() {}

}
