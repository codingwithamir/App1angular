import { Component, OnInit, Inject} from '@angular/core';
import { TestClass } from '../person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject("myToken") private v1,
              @Inject("myTest") private v2:TestClass) {
                // alert(v1);
                // alert(v2.age);
               }

  ngOnInit(): void {
  }

}
