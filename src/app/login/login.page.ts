import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,

})
export class LoginPage implements OnInit {

  username = ''
  password = ''

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }


  Ingresar() {

    this.http.get('http://127.0.0.1:8000/user/' + this.username + '/' + Md5.hashStr(this.password))
      .forEach((response: any) => {
        console.log(response);
        if (response[0]['name']) {
          localStorage.setItem('user', JSON.stringify(response[0]));
          this.router.navigateByUrl('/dashboard');
        }

      }).catch((error: any) => {
        console.error('Error during login:', error);
      }
      );
  }


  addCount(){
    this.router.navigateByUrl('/register');
  }
}
