import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DesignationModel } from 'src/app/Model/Employee';
import { GetResponse } from 'src/app/Model/Response';
import { AppService } from 'src/app/Service/app.service';
import { EmployeeService } from 'src/app/Service/employee.service';
import { IconEssentialService } from 'src/app/Service/icon-essential.service';
import Swal from 'sweetalert2';
export interface UserData {
  name: string;
  email: string;
  phone: string;
}
@Component({
  selector: 'app-emp-designation',
  templateUrl: './emp-designation.component.html',
  styleUrls: ['./emp-designation.component.css']
})
export class EmpDesignationComponent implements OnInit {


  //for mat progress
  color: string = 'primary';
  mode: string = 'determinate';
  value = 50;
  //end of mat progrss

  displayedColumns: string[] = ['branchName', 'departmentName', 'designationname', 'createdOn', 'isActive', 'actions'];
  pageSizeOptions: number[] = [5, 10, 25, 50];
  pageSize: number = 5;

  dataSource: any;
  dataSourceBranch: any;
  dataSourceDepartment: any;
  filteredData!: MatTableDataSource<any>;
  buttonText: string = "Save";

  designation: DesignationModel =
    {
      desigid: '',
      designationname: '',
      branchId: '',
      branchName: '',
      departmentId: '',
      departmentName: '',
      createdOn: '',
      createdBy: '',
      updatedOn: '',
      updatedBy: '',
      isActive: false
    };
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild('content') content!: ElementRef;
  isLoading: boolean = false;
  designationForm!: FormGroup;
  constructor(private empservice: EmployeeService, private appService: AppService, private router: Router, private dialog: MatDialog, private fb: FormBuilder) {
    // this.department=appService.temp_data;

  }
  ngOnInit(): void {
    console.log("ngOnInut");
    this.loadBranch();
    this.loadDesignations();
    this.designationForm = this.fb.group({
      branchId: ['', Validators.required],
      departmentId: ['', Validators.required],
      designationName: ['', Validators.required],
      isactive: ['', Validators.requiredTrue]
    });
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
  onChangeBranch(value:any)
  {
    //alert(value);
    this.empservice.getDepartmentByBranch(value).subscribe((result: GetResponse) => {
      if (result != null) {
        if (result['data'] != null) {
          this.dataSourceDepartment = result['data'];
          //console.log(this.dataSourceDepartment);
        }
      }
    });
  }
 
  loadDesignations() {
    this.isLoading = true;

    setTimeout(() => {
      this.empservice.getAllDesignation().subscribe((result: GetResponse) => {
        console.log(result['data']);
        this.dataSource = new MatTableDataSource<DesignationModel>(result['data']);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      // Once the data is fetched or the operation is complete, set isLoading to false
      this.isLoading = false;
    }, 2000);
  }
  //save or update
  saveOrUpdate() 
  {
   // alert("hello.....");
    if (this.designation.desigid != '') {
      debugger;

      if (this.designationForm.valid) {

        this.empservice.updateDesignation(this.designation).subscribe(result => {

          if (result['response'] == 200) {
            Swal.fire('', result['message'], 'success').then(() => {
              this.loadDesignations();
              this.clearData();
              this.buttonText="Save";
              this.router.navigate(['/emp-designation']);
              
            });

          }
          else {
            Swal.fire('', result['message'], 'error');
          }
        });
      }
    }
    else {
      if (this.designationForm.valid) {

        this.designation = this.designationForm.value;
       
        this.empservice.saveDesignation(this.designation).subscribe((result) => {
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
              this.loadDesignations();
              this.router.navigate(['/emp-designation'])
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
    this.designation =
    {
      desigid: '',
      designationname: '',
      branchId: '',
      branchName: '',
      departmentId: '',
      departmentName: '',
      createdOn: '',
      createdBy: '',
      updatedOn: '',
      updatedBy: '',
      isActive: false
    }
  }
  //edit 
  bindDataForEdit(data: DesignationModel) {
    this.buttonText = "Update";
    this.designation = data;
    this.onChangeBranch(this.designation.branchId);
    //console.log(this.department);
  }

  deleteDesignation(desigid: string) {
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
        this.empservice.deleteDesignation(desigid).subscribe((result: GetResponse) => {
          if (result['response'] == 200) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            ).then(() => {
              this.loadDesignations();
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

  //view Details
  viewDepartmentDetails(item: DesignationModel) {
    //console.log(item);
    this.appService.temp_data = item;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.position = {
      top: '60px',
      left: '500px'
    };
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    //this.dialog.open(DepartmentdetailsComponent, dialogConfig);
  }

  ExportEXCEL() {
    const onlyNameAndSymbolArr: Partial<DesignationModel>[] =
      this.dataSource.data.map((x: { deptId: any; departmentName: any; branchId: any; branchName: any; createdOn: any; createdBy: any; updatedOn: any; updatedBy: any; isActive: any }) => ({
        deptId: x.deptId,
        departmentname: x.departmentName,
        branchid: x.branchId ? x.branchId : "NA",
        branchname: x.branchName ? x.branchName : "NA",
        createdon: x.createdOn ? x.createdOn : "NA",
        createdby: x.createdBy ? x.createdBy : "NA",
        updatedon: x.updatedOn ? x.updatedOn : "NA",
        updatedby: x.updatedBy ? x.updatedBy : "NA",
        isactive: x.isActive ? "Active" : "Inactive"
      }));
    IconEssentialService.exportArrayToExcel(onlyNameAndSymbolArr, "department-details");
  }
}

