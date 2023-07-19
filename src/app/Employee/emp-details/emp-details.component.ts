import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BranchModel } from 'src/app/Model/Employee';
import { GetResponse } from 'src/app/Model/Response';
import { EmployeeService } from 'src/app/Service/employee.service';
export interface UserData {
  name: string;
  email: string;
  phone: string;

}
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone','actions'];
  dataSource: MatTableDataSource<UserData>;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  pageSize: number = 5;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private empservice :EmployeeService) {
    const users: UserData[] = [
      { name: 'John Doe', email: 'johndoe@example.com', phone: '1234567890' },
      { name: 'Jane Smith', email: 'janesmith@example.com', phone: '9876543210' },
      // Add more users as needed
    ];
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onPageChange(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
  }

}
