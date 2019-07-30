import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../dto/Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  saveMovie(movie: Movie) {
    return this.http.post(`api/movie/save`, movie);
  }

  getAllMovie() {
    return this.http.get<Movie[]>('api/movie/list');
  }

  getMovie(id:number){
    return this.http.get<Movie>(`api/movie/${id}`);
  }
  getMovieImage(imageName: string): Observable<Blob> {
    return this.http.get(`api/movie/img/${imageName}`, { responseType: 'blob' });
  }
}
