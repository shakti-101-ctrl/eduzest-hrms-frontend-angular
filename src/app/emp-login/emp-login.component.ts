import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {
  username : string ="";
  password : string="";

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  login()
  {
    if(this.username==="admin" && this.password==="admin")
    {
      console.log("hello");
      this.router.navigate(['/home']);
    }

  }

}
