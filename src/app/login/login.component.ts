import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../services/auth.service';
import {User} from '../../model/user';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  email: string;
  password: string;

  loginForm = new FormControl('');

  ngOnInit() {
  }

  updateLoginForm() {
    this.loginForm.setValue('t@g.com');
  }

  login(): void {
    // const user: User = {
    //   email: 'tahir60652@gmail.com',
    //   password: 'queen123'
    // };
    console.log(this.email, this.password);
    // this.authService.login(user);
  }
}
