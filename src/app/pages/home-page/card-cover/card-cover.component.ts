import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-cover',
  templateUrl: './card-cover.component.html',
  styleUrls: ['./card-cover.component.css', './card-cover.component.desktop.css']
})
export class CardCoverComponent implements OnInit {
  id = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
