import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"person",component:PersonComponent},
  {path:"login",component:LoginComponent},
  {path:"movies",component:MoviesComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
