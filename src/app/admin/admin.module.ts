import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    AdminRoutingModule
  ],
  declarations: [AdminListComponent]
})
export class AdminModule { }
