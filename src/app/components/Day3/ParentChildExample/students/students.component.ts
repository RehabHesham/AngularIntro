import { Component } from '@angular/core';
import { IStudent } from 'src/app/Models/istudent';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  students: IStudent[] = [
    {
      id: 1,
      name: 'John Doe',
      age: 25,
      address: 'Alex',
      phoneNumber: '0123358887',
    },
    {
      id: 2,
      name: 'Ali Ahmed',
      age: 22,
      address: 'Cairo',
      phoneNumber: '01085222287',
    },
    {
      id: 3,
      name: 'Noha Omar',
      age: 27,
      address: 'Giza',
      phoneNumber: '011258888888',
    },
    {
      id: 4,
      name: 'Rana Yasser',
      age: 20,
      address: 'Alex',
      phoneNumber: '01578863333',
    }
    
  ];
}
