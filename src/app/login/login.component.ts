import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  email: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    // this.authService.login(this.email, this.password)
    //   .subscribe(data => {
    //     this.router.navigate(['']);
    //   });
    console.log('Logging in');
  }
}
