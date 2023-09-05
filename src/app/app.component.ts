import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';

  public str="Hello Student"

  data:any; 

  dynamicStyles: any = {
    'color':'red',
    'font-size': '16px'
  }
}
