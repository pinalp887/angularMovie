import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Screen } from '../dto/screen';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(private http:HttpClient) { }

  saveScreen(screen:Screen){
    return this.http.post('api/screen/save',screen);
  }

  getAllScreen(){
    return this.http.get<Screen[]>('api/screen/list');
  }
  getScreen(id:number){
    return this.http.get<Screen>(`api/screen/${id}`);
  }

  deleteScreen(id:number){
    return this.http.delete(`api/screen/${id}`);
  }
}
