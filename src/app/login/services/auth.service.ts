import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor() { }

  login() {
    // call http
    this.isLoggedIn = true;
  }

  logout() {
    // call http
    this.isLoggedIn = false;
  }

}
