import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'presentation-example',
  templateUrl: './presentation-example.html',
  styleUrls: ['./presentation-example.scss'],
})
export class PresentationExample implements OnInit {
  @Input() name: string;
  @Input() surname: string;


  constructor() { }

  ngOnInit() {}

}
