import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { BookComponent } from './book/book.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component'

const routes: Routes = [
  {path: 'movie-list', component: MovieListComponent},
  {path: 'now-playing', component: NowPlayingComponent},
  {path: 'coming-soon', component: ComingSoonComponent},
  {path: 'book', component: BookComponent},
  {path: 'movie/:movie.Id', component: MovieDetailsComponent},
  {path: '', redirectTo: 'movie-list', pathMatch: 'full'},
  {path: '**', redirectTo: 'movie-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
