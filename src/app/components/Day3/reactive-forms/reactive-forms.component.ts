import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  Myform: FormGroup = new FormGroup({
    name: new FormControl('', [
      /*validators here*/
      Validators.required,
      Validators.minLength(4),
    ]),
    age: new FormControl(null, [
      /*validators here*/
      Validators.required,
      Validators.min(15),
      Validators.max(25),
    ]),
  });

  get nameControl() {
    return this.Myform.get('name');
  }

  get ageControl() {
    return this.Myform.get('age');
  }

  getData(e: Event) {
    e.preventDefault();

    console.log(this.Myform.valid);
    console.log(this.Myform.value);
  }
}
