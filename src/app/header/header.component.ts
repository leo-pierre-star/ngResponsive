import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuMobile = false;

  constructor() { }

  toggleMenuMob(): void{
    this.menuMobile = !this.menuMobile;
    console.log('menuMobile', this.menuMobile);
  }
  ngOnInit(): void {
  }

}
