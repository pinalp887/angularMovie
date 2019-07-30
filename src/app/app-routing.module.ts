import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { MovieregisterComponent } from './movieregister/movieregister.component';
import { ScreenComponent } from './screen/screen.component';
import { ScreenlistComponent } from './screenlist/screenlist.component';
import { MovielistComponent } from './movielist/movielist.component';
import { ShowRegisterComponent } from './show-register/show-register.component';
import { ShowlistComponent } from './showlist/showlist.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'movie/new', component: MovieregisterComponent },
  { path: 'screen/new', component: ScreenComponent },
  { path: 'screen/list', component: ScreenlistComponent },
  { path: 'movie/list', component: MovielistComponent },
  { path: 'showregister/new', component: ShowRegisterComponent },
  { path: 'show/list', component: ShowlistComponent },
  { path: 'internalError', component: InternalServerErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
