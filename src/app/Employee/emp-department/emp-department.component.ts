import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DepartmentModel } from 'src/app/Model/Employee';
import { GetResponse } from 'src/app/Model/Response';
import { AppService } from 'src/app/Service/app.service';
import { EmployeeService } from 'src/app/Service/employee.service';
import { CsvuploadComponent } from 'src/app/Shared/csvupload/csvupload.component';
import Swal from 'sweetalert2';
import { DepartmentdetailsComponent } from 'src/app/Employee/emp-department/departmentdetails/departmentdetails.component';
import { IconEssentialService } from 'src/app/Service/icon-essential.service';

export interface UserData {
  name: string;
  email: string;
  phone: string;
}
@Component({
  selector: 'app-emp-department',
  templateUrl: './emp-department.component.html',
  styleUrls: ['./emp-department.component.css']
})
export class EmpDepartmentComponent implements OnInit {
  //for mat progress
  color: string = 'primary';
  mode: string = 'determinate';
  value = 50;
  //end of mat progrss

  displayedColumns: string[] = ['branchName', 'departmentName', "createdOn", "isActive", "actions"];
  dataSource: any;
  dataSourceBranch: any;
  filteredData!: MatTableDataSource<any>;
  buttonText: string = "Save";

  department: DepartmentModel =
    {
      deptId: '',
      departmentName: '',
      branchId: '',
      branchName: '',
      createdOn: '',
      updatedBy: '',
      createdBy: '',
      updatedOn: '',
      isActive: false
    };
  pageSizeOptions: number[] = [5, 10, 25, 50];
  pageSize: number = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild('content') content!: ElementRef;
  isLoading: boolean = false;
  deptForm!: FormGroup;
  constructor(private empservice: EmployeeService, private appService: AppService, private router: Router, private dialog: MatDialog, private fb: FormBuilder) {
    // this.department=appService.temp_data;

  }
  ngOnInit(): void {

    this.loadBranch();
    this.getAllDepartments();
    this.deptForm = this.fb.group({

      branchId: ['', Validators.required],
      departmentName: ['', Validators.required],
      isactive: [false, Validators.requiredTrue],
    });

  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
  //filter
  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
  onPageChange(event: PageEvent) {
    if (this.dataSource != null) {
      this.paginator.pageIndex = event.pageIndex;
      this.paginator.pageSize = event.pageSize;
    }

  }
  loadBranch() {
    this.empservice.getAllBrances().subscribe((result: GetResponse) => {
      if (result != null) {
        if (result['data'] != null) {
          this.dataSourceBranch = result['data'];
        }
      }

    });
  }
  saveOrUpdate() {
    if (this.department.deptId != '') {
      debugger;

      if (this.deptForm.valid) {

        this.empservice.updateDepartment(this.department).subscribe(result => {

          if (result['response'] == 200) {
            Swal.fire('', result['message'], 'success').then(() => {
              this.router.navigate(['/emp-department']);
            });

          }
          else {
            Swal.fire('', result['message'], 'error');
          }
        });
      }
    }
    else {
      if (this.deptForm.valid) {

        this.department = this.deptForm.value;
        //this.branchDetails.createdBy = this.appService.username;
        //console.log(this.branchDetails);
        this.empservice.saveDepartment(this.department).subscribe((result) => {
          console.log(result);
          if (result['response'] == 200) {
            //alert(result['message']);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: true

            }).then((result) => {
              this.clearData();
              this.getAllDepartments();
              this.router.navigate(['/emp-department'])
            });

          }
          else {
            alert(result['message']);
          }
        });

      }
    }
  }
  clearData() {
    this.department = {
      deptId: '',
      departmentName: '',
      branchId: '',
      branchName: '',
      createdOn: '',
      updatedBy: '',
      createdBy: '',
      updatedOn: '',
      isActive: false
    };
  }
  bindDataForEdit(data: DepartmentModel) {
    this.buttonText = "Update";
    this.department = data;
    console.log(this.department);
  }
  getAllDepartments() {
    this.isLoading = true;

    setTimeout(() => {
      this.empservice.getAllDepartment().subscribe((result: GetResponse) => {
        console.log(result);
        this.dataSource = new MatTableDataSource<DepartmentModel>(result['data']);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      // Once the data is fetched or the operation is complete, set isLoading to false
      this.isLoading = false;
    }, 2000);
  }

  deleteDepartment(deptid: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empservice.deleteDepartment(deptid).subscribe((result: GetResponse) => {
          if (result['response'] == 200) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            ).then(() => {
              this.getAllDepartments();
            })

          }
          else {

            Swal.fire(
              'Deleted!',
              result['message'],
              'warning'
            )
          }
        })
      }
    })
  }

  uploadCsv() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.position = {
      top: '60px',
      left: '500px'
    };
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(CsvuploadComponent, dialogConfig);
  }

  //view Details
  viewDepartmentDetails(item:DepartmentModel) {
    //console.log(item);
    this.appService.temp_data = item;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.position = {
      top: '60px',
      left: '500px'
    };
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(DepartmentdetailsComponent, dialogConfig);
  }
//export to excel
ExportEXCEL() {
  const onlyNameAndSymbolArr: Partial<DepartmentModel>[] = 
  this.dataSource.data.map((x: { deptId:any;departmentName:any;branchId:any;branchName:any;createdOn:any;createdBy:any;updatedOn:any;updatedBy:any;isActive:any }) => ({
    deptId: x.deptId,
    departmentname:x.departmentName,
    branchid:x.branchId?x.branchId:"NA",
    branchname:x.branchName?x.branchName:"NA",
    createdon:x.createdOn?x.createdOn:"NA",
    createdby:x.createdBy?x.createdBy:"NA",
    updatedon:x.updatedOn?x.updatedOn:"NA",
    updatedby:x.updatedBy?x.updatedBy:"NA",
    isactive:x.isActive?"Active":"Inactive"
  }));
  IconEssentialService.exportArrayToExcel(onlyNameAndSymbolArr, "department-details");
}
}
