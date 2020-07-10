import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {
  @Input() size: number;
  @Output() sizeEvent= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  inc() {
    return this.resize(+1);
  }
  dec() {
    return this.resize(-1);
  }

  resize(delta: number) {
    this.size = this.size + delta;
    if(this.size>20){
      this.sizeEvent.emit(this.size);
    }
  }
}
