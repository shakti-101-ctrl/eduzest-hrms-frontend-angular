import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeService } from 'src/app/Service/employee.service';
import { GetResponse } from 'src/app/Model/Response';
import { BranchModel } from 'src/app/Model/Employee';
import { AppService } from 'src/app/Service/app.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { PdfService } from 'src/app/Service/pdf.service';
@Component({
  selector: 'app-emp-branch',
  templateUrl: './emp-branch.component.html',
  styleUrls: ['./emp-branch.component.css'],

})
export class EmpBranchComponent implements OnInit {
  color:string = 'primary';
  mode:string = 'determinate';
  value = 50;

  displayedColumns: string[] = ['branchName', 'state', 'city',"mobileNumber", "isActive", "actions"];
  dataSource: any;
  filteredData!: MatTableDataSource<any>;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  pageSize: number = 5;
  isLoading: boolean = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private empservice: EmployeeService, private appService: AppService, private router: Router,private pdfServive : PdfService) {
  }
  ngOnInit(): void {
    this.getAllBrach();
   
  }
  
  getAllBrach() {
    this.isLoading = true;

    setTimeout(() => {
      this.empservice.getAllBrances().subscribe((result: GetResponse) => {
        console.log(result);
        this.dataSource = new MatTableDataSource<BranchModel>(result['data']);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      // Once the data is fetched or the operation is complete, set isLoading to false
      this.isLoading = false;
    }, 2000);
  }
  //delete
  deleteBranch(branchid: string) {
    let flag = confirm("Are you sure ? ");
    if (flag) {

      this.empservice.deleteBranch(branchid).subscribe((result: GetResponse) => {
        if (result['response'] == 200) {
          alert(result['message']);
          this.getAllBrach();
        }
        else {

          alert(result['message']);
        }
      })
    }
  }
  //edit
  editBranch(item: BranchModel) {
    console.log(item);
    this.appService.temp_data = item;
    //alert(this.appService.temp_data);
    this.router.navigate(['/emp-update-branch']);
  }
  //filter
  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
 
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  onPageChange(event: PageEvent) {
    if (this.dataSource != null) {
      this.paginator.pageIndex = event.pageIndex;
      this.paginator.pageSize = event.pageSize;
    }

  }
}

