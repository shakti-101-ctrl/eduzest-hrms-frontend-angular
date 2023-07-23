import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
const getFileName = (name: string) => {
  let timeSpan = new Date().toISOString();
  let sheetName = name || "ExportResult";
  let fileName = `${sheetName}-${timeSpan}`;
  return {
    sheetName,
    fileName
  };
};
@Injectable({
  providedIn: 'root'
})


export class IconEssentialService {

  constructor() { }
  static exportArrayToExcel(arr: any[], name : any) {
    let { sheetName, fileName } = getFileName(name);

    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(arr);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
 
}
