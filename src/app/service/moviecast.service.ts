import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieCast } from '../dto/MovieCast';

@Injectable({
  providedIn: 'root'
})
export class MoviecastService {

  constructor(private http:HttpClient) { }

  getCast(){
    return this.http.get<MovieCast[]>(`api/moviecast/list`);
  }

  getOneCast(id:number){
    return this.http.get<MovieCast>(`api/moviecast/get/${id}`);
  }
}
