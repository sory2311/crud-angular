import { Component } from '@angular/core';

import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-crud';

  employeeArray: Employee[] = [
    {id: 1, name: "Tom", country: "Chile"},
    {id: 2, name: "Neo", country: "Chile"},
    {id: 3, name: "Bruce", country: "Chile"},
  ];
  selectedEmployee: Employee= new Employee();
}
