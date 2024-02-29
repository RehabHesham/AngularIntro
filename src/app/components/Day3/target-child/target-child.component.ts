import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-target-child',
  templateUrl: './target-child.component.html',
  styleUrls: ['./target-child.component.css'],
})
export class TargetChildComponent implements OnInit, OnChanges, OnDestroy {
  
  constructor() {
    console.log('1- ctor');
    // inject services & objects
    // initialization variables
  }

  ngOnInit(): void {
    console.log('2- OnInit');
    // connect to apis
  }
  ngOnChanges(changes: SimpleChanges): void {
    // keep tracking changes
    console.log('OnChanges');
    console.log(changes);
    console.log(
      changes['fromSource'].currentValue,
      changes['fromSource'].previousValue
    );
    if (!changes['fromSource'].isFirstChange()) this.ChangesCounter++;
  }

  ngOnDestroy(): void {
    console.log("last method to run when destroying component");
  }

  @Input() fromSource: string = '';

  ChangesCounter: number = 0;
}
