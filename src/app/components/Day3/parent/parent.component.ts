import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  // Data : string = "Parent Data to be transfered";

  childData: string = '';

  getData(data: string) {
    this.childData = data;
  }

  sourceChildData: string = '';
  getSourceData(data: string) {
    this.sourceChildData = data;
  }
}
