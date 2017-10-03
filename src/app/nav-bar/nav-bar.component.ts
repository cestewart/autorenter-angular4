import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedIn: boolean = false;
  username: string;

  constructor() { }

  ngOnInit() {
    this.setLoggedIn();
  }

  setLoggedIn() {
    if (localStorage.getItem('username')) {
      this.loggedIn = true;
      this.username = localStorage.getItem('username');
    }
  }

  logout() {
    localStorage.clear();
  }
}
