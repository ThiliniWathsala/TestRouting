import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import{ TestComponent} from './test/test.component';
import { Test1Component} from './test1/test1.component';


const routes: Routes = [
  
 {path:'', redirectTo:'/department', pathMatch: 'full'},
  {path:'department', component:DepartmentListComponent}, // component property (show where to go)
  {path:'employee', component:EmployeeListComponent},
  {path: 'test', component:TestComponent},
 {path:'**', component: Test1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingCompnent=[DepartmentListComponent,EmployeeListComponent,TestComponent,Test1Component];
