import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { AuthenticationService } from './service/authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { MovieregisterComponent } from './movieregister/movieregister.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MoviecastService } from './service/moviecast.service';
import { RouteguardService } from './service/http/routeguard.service';
import { HttpInterceptorService } from './service/http/http-interceptor.service';
import { ScreenComponent } from './screen/screen.component';
import { ScreenlistComponent } from './screenlist/screenlist.component';
import { MovielistComponent } from './movielist/movielist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShowRegisterComponent } from './show-register/show-register.component';
import { ShowlistComponent } from './showlist/showlist.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InternalServerErrorComponent,
    MovieregisterComponent,
    HeaderComponent,
    FooterComponent,
    ScreenComponent,
    ScreenlistComponent,
    MovielistComponent,
    ShowRegisterComponent,
    ShowlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService,AuthenticationService,MoviecastService,RouteguardService,{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
