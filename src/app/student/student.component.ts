import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
public students = [
  {"Name" : "Ghadeer" , "Email": "ghadeer@gmail.com" , "Marks" : 55},
  {"Name" : "Rayan" , "Email": "rayan@gmail.com" , "Marks" : 30},
  {"Name" : "Amal" , "Email": "amal@gmail.com" , "Marks" : 78}
]
}
