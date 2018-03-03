import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'demos-component',
  templateUrl: 'demos.component.html',
  styleUrls: ['demos.component.css']
})

export class DemosComponent implements OnInit {
  Major = '';
  selectedV = '';
  SlideOff = true;
  SlideOn = true;

  ngOnInit(): void {
  }

}
