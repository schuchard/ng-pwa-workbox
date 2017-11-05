import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  admins: any ;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.admins = this.http.get('http://localhost:3000/api/employees');
  }

}
