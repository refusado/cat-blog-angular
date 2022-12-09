import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  imageUrl = "";
  @Input()
  title = "";
  @Input()
  id: string = "1";

  constructor() { }

  ngOnInit(): void {
  }

}
