import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpBranchComponent } from './Employee/emp-branch/emp-branch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EmpDepartmentComponent } from './employee/emp-department/emp-department.component';
import { EmpDesignationComponent } from './employee/emp-designation/emp-designation.component';
import { EmpDetailsComponent } from './employee/emp-details/emp-details.component';
import { EmpSalarytemplateComponent } from './Hrms/emp-salarytemplate/emp-salarytemplate.component';
import { EmpSalaryAssignmentComponent } from './Hrms/emp-salary-assignment/emp-salary-assignment.component';
import { EmpAddBranchComponent } from './employee/emp-add-branch/emp-add-branch.component';
import { EmpAddDepartmentComponent } from './Employee/emp-add-department/emp-add-department.component';
import { EmpAddDesignationComponent } from './Employee/emp-add-designation/emp-add-designation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmpAddDetailsComponent } from './Employee/emp-add-details/emp-add-details.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpBranchComponent,
    EmpDepartmentComponent,
    EmpDesignationComponent,
    EmpDetailsComponent,
    EmpSalarytemplateComponent,
    EmpSalaryAssignmentComponent,
    EmpAddBranchComponent,
    EmpAddDepartmentComponent,
    EmpAddDesignationComponent,
    WelcomeComponent,
    EmpAddDetailsComponent,
    SideMenuComponent,
    EmpLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
