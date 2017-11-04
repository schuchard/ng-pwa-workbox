import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'employee', loadChildren: 'app/employee/employee.module#EmployeeModule' },
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
