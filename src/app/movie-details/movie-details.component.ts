import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const movieIdFromRoute = Number(routeParams.get('movie.Id'));

    this.movie = Movies.find(movie => movie.id === movieIdFromRoute);
    window.alert('To view this movie only only cost $' + this.movie.Price );
  }

}
