import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App1';
  defaultSize=16;

  sizeHandler($event){
    alert($event);
  }
}
