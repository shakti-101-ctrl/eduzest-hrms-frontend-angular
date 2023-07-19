import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'EDUZEST HRMS';
  logoPath : string = "assets/logo@2.png"
  isHeaderMenu : boolean = true;
  isSideMenu : boolean = true;
  constructor(private route: Router) { }
  ngDoCheck(): void {
    const currentroute = this.route.url;
    if(currentroute=="/app-emp-login")
    {
      this.isHeaderMenu = false;
      this.isSideMenu= false;
    }
    else
    {this.isHeaderMenu = true;
      this.isSideMenu= true;
    }
  }
}
