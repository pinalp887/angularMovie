import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowReg } from '../dto/ShowNewRegister';
import { ShowRegister } from '../dto/ShowRegister';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  saveShow(showNew: ShowReg) {
    return this.http.post(`api/show/save`, showNew);
  }

  getAllShow(){
    return this.http.get<ShowRegister[]>(`api/show/list`);
  }
}
