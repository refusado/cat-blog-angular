import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css', './nav-bar.component.desktop.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navbarActive: boolean = true;
  toggleNavbar(): void {
    this.navbarActive = !this.navbarActive;
  }

}
