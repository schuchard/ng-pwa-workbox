import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { EmployeeListComponent } from './employee-list/employee-list.component';

// routing
import { EmployeeRoutingModule } from './employee-routing.module';

import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    EmployeeRoutingModule,
  ],
  declarations: [EmployeeListComponent]
})
export class EmployeeModule { }
