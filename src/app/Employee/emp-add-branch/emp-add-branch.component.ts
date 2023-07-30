import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchModel } from 'src/app/Model/Employee';
import { AppService } from 'src/app/Service/app.service';
import { EmployeeService } from 'src/app/Service/employee.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-emp-add-branch',
  templateUrl: './emp-add-branch.component.html',
  styleUrls: ['./emp-add-branch.component.css']
})
export class EmpAddBranchComponent implements OnInit {
  registerForm !: FormGroup
  submitted=false;
  branchDetails!: BranchModel;
  headingText : string ="";
  buttonText:string="";
  constructor(private fb : FormBuilder,private empService : EmployeeService,private router: Router,private appService : AppService) 
  {
    

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
    createdby:this.appService.username
   });
   
  }
  
  onSubmit()
  {
      this.submitted = true;
      if (this.registerForm.valid) {
      
        this.branchDetails = this.registerForm.value;
        //this.branchDetails.createdBy = this.appService.username;
        //console.log(this.branchDetails);
        this.empService.saveBranch(this.branchDetails).subscribe((result)=>{
          console.log(result);
          if(result['response']==200)
          {
            //alert(result['message']);
            Swal.fire({
              position : 'center',
              icon:'success',
              title:'Your work has been saved',
              showConfirmButton:true
              
            }).then((result)=>
            {
              this.router.navigate(['/emp-branch'])
            });
            
          }
          else
          {
            alert(result['message']);
          }
        });
        
      }
  }

  
}
