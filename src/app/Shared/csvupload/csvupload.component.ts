import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Service/app.service';


@Component({
  selector: 'app-csvupload',
  templateUrl: './csvupload.component.html',
  styleUrls: ['./csvupload.component.css']
})
export class CsvuploadComponent implements OnInit {
  fileRequiredMessage!: string;
  currentroute!:string;
  constructor(private matDialogRef: MatDialogRef<CsvuploadComponent>, private appService: AppService,private route : Router) { }

  ngOnInit(): void {
    
  }
  ngDoCheck(): void {
    this.currentroute = this.route.url;
  }
  onFileChange(event: any): void {
    if(event.target.files[0]!=null)
    {
      
      this.appService.selectedFile = event.target.files[0];
      this.appService.fileName =event.target.files[0].name;
    }
   
    console.log(this.appService.selectedFile);
  }


  uploadFile(): void {
   
    if (!this.appService.selectedFile) {
      this.fileRequiredMessage = "File is required!";
    }
    else {
  
      const formData = new FormData();
      formData.append('file', this.appService.selectedFile, this.appService.fileName);
      //alert(this.appService.selectedFile.name);  
      this.fileRequiredMessage = "";
      if(this.currentroute=="/emp-branch")
      {
        alert("emp-branch");
      }
      else if(this.currentroute=="/emp-department")
      {
        alert("emp-department");
      }

    }

  }
  closeDialog() {
    this.matDialogRef.close();
  }

}
