import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SizerComponent } from './sizer/sizer.component';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { PersonComponent } from './person/person.component';
import { LoginComponent } from './login/login.component';
import { TestClass } from './person';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    DirectivePracticeComponent,
    PersonComponent,
    LoginComponent,
    HomeComponent,
    MoviesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:"myToken",
      useValue:123
    },
    {
      provide:"myTest",
      useClass:TestClass
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
