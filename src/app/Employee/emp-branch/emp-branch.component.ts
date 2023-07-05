import { Component, OnInit } from '@angular/core';
import {AfterViewInit,ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
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
  displayedColumns: string[] = ['name', 'email', 'phone','actions'];
  dataSource: MatTableDataSource<UserData>;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  pageSize: number = 5;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor() {
    const users: UserData[] = [
      { name: 'John Doe', email: 'johndoe@example.com', phone: '1234567890' },
      { name: 'Jane Smith', email: 'janesmith@example.com', phone: '9876543210' },
      // Add more users as needed
    ];
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onPageChange(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
  }
}

