import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface UserData {
  name: string;
  email: string;
  phone: string;

}
@Component({
  selector: 'app-emp-salarytemplate',
  templateUrl: './emp-salarytemplate.component.html',
  styleUrls: ['./emp-salarytemplate.component.css']
})
export class EmpSalarytemplateComponent implements OnInit {

  totalallowance : number = 0;
  totaldeduct : number = 0;
  allowanceamount: { text: string }[] = [];
  allowancename: { text: string }[] = [];

  deductamount: { text: string }[] = [];
  deductname: { text: string }[] = [];
  //for allwances
  addRowAllowance() {
    this.totalallowance=0;
    for (let row of this.allowanceamount) {
      if(row.text!="")
      {
        console.log('Textbox value:', row.text);
        this.totalallowance += parseInt(row.text);
      }
     
    }
    this.allowancename.push({ text: '' });
    this.allowanceamount.push({ text: '' });

  }
  removeRowAllowance(index: number) {
    console.log(this.totalallowance);
    //console.log(this.allowanceamount[index].text);
    if(this.allowanceamount[index].text!="")
      this.totalallowance -= parseInt(this.allowanceamount[index].text);
    this.allowancename.splice(index, 1);
    this.allowanceamount.splice(index, 1);
    

  }
  getIndexArrayAllowances() {
    return Array.from({ length: Math.min(this.allowanceamount.length, this.allowancename.length) }, (_, index) => index);
  }
  getValuesAllowances() {
    for (let all of this.allowancename) {
      console.log('Textbox value:', all.text);
      // Perform further actions with the textbox value
    }
    for (let row of this.allowanceamount) {
      console.log('Textbox value:', row.text);
      // Perform further actions with the textbox value
    }

  }
  //For deduction
  addRowDeduction() {
    this.totaldeduct=0;
    for (let row of this.deductamount) {
      console.log('Textbox value:', row.text);
      this.totaldeduct += parseInt(row.text);
    }
    this.deductname.push({ text: '' });
    this.deductamount.push({ text: '' });

  }
  removeRowDeduction(index: number) {
    if(this.deductamount[index].text!="")
      this.totaldeduct -= parseInt(this.deductamount[index].text);
    this.deductname.splice(index, 1);
    this.deductamount.splice(index, 1);

  }
  getIndexArrayDeduction() {
    return Array.from({ length: Math.min(this.deductamount.length, this.deductname.length) }, (_, index) => index);
  }
  getValuesDeduction() {
    for (let all of this.deductname) {
      console.log('Textbox value:', all.text);
      // Perform further actions with the textbox value
    }
    for (let row of this.deductamount) {
      console.log('Textbox value:', row.text);
      // Perform further actions with the textbox value
    }

  }

  onTextChangedAllownace(target: EventTarget | null) {
    if (target instanceof HTMLInputElement) {
      const value = target.value;
      console.log('Text changed:', value);
      // Do something with the updated value
      this.totalallowance +=parseInt(value);
    }
  }
  onTextChangedDeduct(value: string) {
    this.totaldeduct -= parseInt(value);
  }
  
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
