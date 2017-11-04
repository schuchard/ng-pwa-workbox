import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private http: HttpClient) { }
  employees: any;

  ngOnInit() {
    this.employees = this.http.get('http://localhost:3000/api/users/random');
  }

}
