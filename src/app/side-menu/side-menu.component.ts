import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
 

  rows: { text: string }[] = [];
  allowance:{text : string}[] =[];
  addRow() {
    this.rows.push({ text: '' });
    this.allowance.push({ text: '' });
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
    this.allowance.splice(index,1);
  }

  getIndexArray() {
    return Array.from({ length: Math.min(this.rows.length, this.allowance.length) }, (_, index) => index);
  }
  
  getValues() {
    for (let all of this.allowance) {
      console.log('Textbox value:', all.text);
      // Perform further actions with the textbox value
    }
    for (let row of this.rows) {
      console.log('Textbox value:', row.text);
      // Perform further actions with the textbox value
    }
   
  }


  rows1: { text: string }[] = [];

  addRow1() {
    this.rows1.push({ text: '' });
  }

  removeRow1(index: number) {
    this.rows.splice(index, 1);
  }
  getValues1() {
    for (let row of this.rows1) {
      console.log('Textbox value:', row.text);
      // Perform further actions with the textbox value
    }
  }


}
