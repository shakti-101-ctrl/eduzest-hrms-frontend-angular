import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { Login, Registration } from '../Model/adminModel';
import { AppService } from '../Service/app.service';



@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {
  color: string = 'primary';
  mode: string = 'determinate';
  value = 50;

  isTrue: boolean = false;
  invalidUserMessage = '';

  loginForm!: FormGroup;
  registrationForm!: FormGroup;

  registration!:Registration
  login!:Login
  
  responsedata: any;
  responseRegistrationDtata:any;

  isLoading : boolean=false;

  activeTab: 'login' | 'register' = 'login';
  constructor(private route: Router, private formBuilder: FormBuilder,private authService:AuthService,private appService : AppService) {
   
  }

  ngOnInit(): void {
     this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });

    // Create the registration form using FormBuilder
    this.registrationForm = this.formBuilder.group({
      userid: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    
  }
  toggleTab(tabName: 'login' | 'register') {
    this.activeTab = tabName;
  }
  onLoginSubmit() {
    this.isLoading=true;
    setTimeout(()=>{
      if (this.loginForm.valid) {
        this.login = this.loginForm.value;
        //console.log(this.login);
         this.authService.ProceedLogin(this.login).subscribe(result=>
           {
             this.responsedata = result;
             //console.log(result);
             if(this.responsedata.token!=null)
             {
             localStorage.setItem('token',this.responsedata.token);
             this.appService.username = "admin";
             this.route.navigate([''])
             }
             else
             {
               alert("Inavlid userid or password!");
             }
           });
       }
    },2000);
    
   
  }

  onRegistrationSubmit() {
    this.isLoading = true;
    setTimeout(() => {
    if (this.registrationForm.valid) 
    {
      this.registration =this.registrationForm.value;
      this.authService.ProceedRegistration(this.registration).subscribe(result=>{
        this.responseRegistrationDtata = result;
        if(this.responseRegistrationDtata.response==200)
        {
            alert("Registered Successfully!");
            this.activeTab = 'login';
        }
        else{
          alert("Registration failed");
        } 
      });
    }
      this.isLoading = false;
    }, 2000);

   
  }
}
