import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login, Registration } from '../Model/adminModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl=environment.host+"Admin"; // https://localhost:7159/api/Admin

  constructor(private http: HttpClient) { }
  ProceedRegistration(data:Registration)
  {
   return this.http.post(`${this.apiUrl + "/adminregistration"}`,data)
  }
  ProceedLogin(UserCred:Login){
    return this.http.post(`${this.apiUrl + "/adminlogin"}`,UserCred);
  }
  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  GetToken(){
   return localStorage.getItem('token')||'';
  }
  HaveAccess(){
    var loggintoken=localStorage.getItem('token')||'';
    var _extractedtoken=loggintoken.split('.')[1];
    var _atobdata=atob(_extractedtoken);
    var _finaldata=JSON.parse(_atobdata);
    if(_finaldata.role=='admin'){
      return true
    }else{
      alert('you not having access');
      return false
    }
  }
}
