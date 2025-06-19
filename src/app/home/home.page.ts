import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(
    public route: Router
  ) {}

 
  ngOnInit() {
    // Initialization logic can go here
    console.log('HomePage initialized');
  }



   navigate() {
  // Navigation logic can go here
    this.route.navigateByUrl('login');
  }

}
