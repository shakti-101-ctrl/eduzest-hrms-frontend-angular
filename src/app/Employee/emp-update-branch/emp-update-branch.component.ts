import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchModel } from 'src/app/Model/Employee';
import { AppService } from 'src/app/Service/app.service';
import { EmployeeService } from 'src/app/Service/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emp-update-branch',
  templateUrl: './emp-update-branch.component.html',
  styleUrls: ['./emp-update-branch.component.css']
})
export class EmpUpdateBranchComponent implements OnInit {

  registerForm !: FormGroup
  submitted=false;
  branchDetails!: BranchModel;
  headingText : string ="";
  buttonText:string="";
  constructor(private fb : FormBuilder,private empService : EmployeeService,private router: Router,private appService : AppService) 
  {
    
    if(appService.temp_data != undefined)
    {
      this.branchDetails = appService.temp_data;
    }
  }
  
  ngOnInit(): void {
  
   this.registerForm = this.fb.group({
    branchname :['',Validators.required],
    city :['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    state:['',Validators.required],
    mobilenumber:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
    address:['',Validators.required],
    isactive:[false,Validators.requiredTrue],
    branchId:this.branchDetails.branchId
   });
  }
  
  onSubmit()
  {

    if(this.registerForm.valid)
    {
      //debugger;
      //this.branchDetails = this.registerForm.value;
      console.log(this.branchDetails);
      this.empService.updateBranch(this.branchDetails).subscribe(result=>{

        if(result['response']==200)
        {
          Swal.fire('',result['message'],'success').then(()=>{
            this.router.navigate(['/emp-branch']);
          });
          
        }
        else
        {
          Swal.fire('',result['message'],'error');
        }
      });
    }
    
  }

}
