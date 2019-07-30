import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../dto/User';
import { JwtToken } from '../dto/JwtToken';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient,private cookieService:CookieService) { }

  login(user:Login){
    return this.http.post(`api/token`,user).pipe(map((res:JwtToken)=>{
      this.cookieService.set("name",user.name);
      this.cookieService.set("token",res.token);
    }));
  }

  isUserLoggedIn(){
    let user=this.cookieService.get("name");
    return user;
  }
}
