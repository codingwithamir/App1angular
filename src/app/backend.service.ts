import { Injectable } from '@angular/core';
import { Person, MoviesResponse } from "../app/person";
import { of, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
 

  constructor(private httpObj:HttpClient) { }


  getPerson():Observable<Array<Person>>{
    const persons:Person[]=[];
    persons.push(new Person(1,"Amir",16));
    persons.push(new Person(2,"Irfan",18));
    persons.push(new Person(3,"Kiran",14));

    return of(persons);
  }

  validateUser(name:string,password:string):Observable<boolean>{
    if (name=="amir" && password=="amir") {
      return of(true);
    }else{
      return of(false);
    }
  }

  getMovies(term:string):Observable<MoviesResponse>{
    let url="https://www.omdbapi.com/?apikey=b2b65064&s="+term;
    return this.httpObj.get<MoviesResponse>(url);
  }

}
