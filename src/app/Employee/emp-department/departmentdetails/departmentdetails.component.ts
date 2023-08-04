import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/Service/app.service';

@Component({
  selector: 'app-departmentdetails',
  templateUrl: './departmentdetails.component.html',
  styleUrls: ['./departmentdetails.component.css']
})
export class DepartmentdetailsComponent implements OnInit {

  dataSource : any;
  constructor(private appServive : AppService,private matDialogRef: MatDialogRef<DepartmentdetailsComponent>) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData()
  {
    this.dataSource = this.appServive.temp_data;

  }

  //close dialog
  closeDialog()
  {
    this.matDialogRef.close();
  }
}
