import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { EmployeeListComponent } from './employee-list/employee-list.component';

// routing
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  declarations: [EmployeeListComponent]
})
export class EmployeeModule { }
