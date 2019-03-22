import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../services/auth.service';
import {User} from '../../model/user';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUser = false;
  isPass = false;

  userForm = new FormControl('');
  passwordForm = new FormControl('');

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  updateLoginForm() {
    if (this.userForm.value === '') {
      this.isUser = true;
      return;
    } else {
      this.isUser = false;
    }

    if (this.passwordForm.value === '') {
      this.isPass = true;
      return;
    } else {
      this.isPass = false;
    }

    const userObj: User = {
      username: this.userForm.value,
      password: this.passwordForm.value
    };

    this.authService.login(userObj)
      .subscribe(
        (data: any[]) => {
          // this.router.navigate(['dashboard']);
        }
      );
  }

}
