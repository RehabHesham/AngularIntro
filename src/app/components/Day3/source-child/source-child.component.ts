import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-source-child',
  templateUrl: './source-child.component.html',
  styleUrls: ['./source-child.component.css'],
})
export class SourceChildComponent {
  inputData: string = '';

  @Output() myEvent: EventEmitter<string> = new EventEmitter();
  sendData(){
    this.myEvent.emit(this.inputData);
  }
}
