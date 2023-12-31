import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpBranchComponent } from './Employee/emp-branch/emp-branch.component';
import { EmpDepartmentComponent } from './employee/emp-department/emp-department.component';
import { EmpDesignationComponent } from './employee/emp-designation/emp-designation.component';
import { EmpDetailsComponent } from './employee/emp-details/emp-details.component';
import { EmpSalaryAssignmentComponent } from './Hrms/emp-salary-assignment/emp-salary-assignment.component';
import { EmpSalarytemplateComponent } from './Hrms/emp-salarytemplate/emp-salarytemplate.component';
import { EmpAddBranchComponent } from './employee/emp-add-branch/emp-add-branch.component';
import { EmpAddDepartmentComponent } from './Employee/emp-add-department/emp-add-department.component';
import { EmpAddDesignationComponent } from './Employee/emp-add-designation/emp-add-designation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmpAddDetailsComponent } from './Employee/emp-add-details/emp-add-details.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { AppComponent } from './app.component';
import { EmpUpdateBranchComponent } from './employee/emp-update-branch/emp-update-branch.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,canActivate:[AuthGuard]
  },
  {
    path: 'emp-branch',
    component: EmpBranchComponent,canActivate:[AuthGuard] 
  },
  {
    path: 'emp-department',
    component: EmpDepartmentComponent,canActivate:[AuthGuard] 
  },
  {
    path: 'emp-designation',
    component: EmpDesignationComponent,canActivate:[AuthGuard] 
  },
  {
    path: 'emp-details',
    component: EmpDetailsComponent,canActivate:[AuthGuard] 
  },
  {
    path: 'emp-salary-template',
    component: EmpSalarytemplateComponent,canActivate:[AuthGuard] 
  },
  {
    path: 'emp-salary-assignment',
    component: EmpSalaryAssignmentComponent,canActivate:[AuthGuard] 
  },
  {
    path: 'emp-add-branch',
    component: EmpAddBranchComponent,canActivate:[AuthGuard] 
  },
  {
    path: 'emp-update-branch',
    component: EmpUpdateBranchComponent,canActivate:[AuthGuard] 
  },
  {
    path: 'emp-add-dept',
    component: EmpAddDepartmentComponent,canActivate:[AuthGuard] 
  },
  {
    path: 'emp-add-desig',
    component: EmpAddDesignationComponent,canActivate:[AuthGuard] 
  },
  {
    path: 'emp-add-details',
    component: EmpAddDetailsComponent,canActivate:[AuthGuard] 
  },
  {
    path: 'app-side-menu',
    component: SideMenuComponent,canActivate:[AuthGuard] 
  }
  ,
  {
    path: 'app-emp-login',
    component: EmpLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
