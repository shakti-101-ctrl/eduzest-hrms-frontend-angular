import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AuthService,private route:Router){

  }
  canActivate()
  {
    if(this.service.IsLoggedIn()){
      return true;
      }else{
        this.route.navigate(['app-emp-login'])
        return false;
      }
  }
}
