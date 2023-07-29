import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CsvuploadComponent } from 'src/app/Shared/csvupload/csvupload.component';

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

  displayedColumns: string[] = ['name', 'email', 'phone','actions'];
  dataSource: MatTableDataSource<UserData>;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  pageSize: number = 5;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private dialog:MatDialog) {
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

}
