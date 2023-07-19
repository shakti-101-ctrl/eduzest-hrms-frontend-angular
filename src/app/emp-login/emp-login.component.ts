import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {
  username : string = '';
  password : string ='';
  isTrue: boolean = false;
  invalidUserMessage = '';
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
