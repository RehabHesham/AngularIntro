import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  // @Input() parentData:string = '';

  myData: string = 'Item added to cart';

  @Output() myEvent: EventEmitter<string> = new EventEmitter();

  sendData(){
    this.myEvent.emit(this.myData);
  }
}
