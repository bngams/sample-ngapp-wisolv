import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  credentials: any = {
    email: '',
    pwd: '',
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submit() {
    console.log('credentials', this.credentials);
    this.authService.login();
  }

}
