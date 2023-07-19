import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeService } from 'src/app/Service/employee.service';
import { GetResponse } from 'src/app/Model/Response';
import { BranchModel } from 'src/app/Model/Employee';





export interface UserData {
  name: string;
  email: string;
  phone: string;

}
@Component({
  selector: 'app-emp-branch',
  templateUrl: './emp-branch.component.html',
  styleUrls: ['./emp-branch.component.css'],

})
export class EmpBranchComponent implements OnInit {
  displayedColumns: string[] = ['branchId', 'branchName', 'state', 'city', "address", "email", "mobileNumber", "isActive", "actions"];
  dataSource: any;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  pageSize: number = 5;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  animal!: string;
  name!: string;
  constructor(private empservice: EmployeeService) {
  }
  ngOnInit(): void {
    this.getAllBrach();

  }
  getAllBrach() {
    this.empservice.getAllBrances().subscribe((result: GetResponse<BranchModel>) => {
      this.dataSource = new MatTableDataSource<BranchModel>(result['data']);
      this.dataSource.paginator = this.paginator;
    });
  }
   

  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onPageChange(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
  }
}

