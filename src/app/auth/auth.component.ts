import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login: any
  password: any
  error = true
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isAuth(): void {
    if (this.login === 'admin' && this.password === 'password') {
      localStorage.setItem('isConnected', 'true');
      this.router.navigate(['infos'])
    }
    else {
      this.error = false
    }
  }

}
