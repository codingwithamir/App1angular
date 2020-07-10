import { Component, OnInit } from '@angular/core';
import { Person } from "../person";
import { BackendService } from "../backend.service";


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[] = [];

  constructor(private backendService: BackendService) { }

  ngOnInit(){
    this.backendService.getPerson().subscribe(
      m=>{
        this.persons=m;
      }
    )
  }

}
