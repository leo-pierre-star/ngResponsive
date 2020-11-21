import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  connecte = false
  menuMobile = false;

  constructor(private router: Router) {
  
   }

  toggleMenuMob(): void {
    this.menuMobile = !this.menuMobile;
  }
  ngOnInit(): void {
    if (Boolean(localStorage.getItem('isConnected'))) {
      this.connecte=true;
     }
  }

 
  logout(): void {
    localStorage.removeItem('isConnected');
    this.router.navigateByUrl('')
    this.connecte=false
  }




}
