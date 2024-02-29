import { Component, Input } from '@angular/core';
import { IStudent } from 'src/app/Models/istudent';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  @Input() student: IStudent | undefined;
}
