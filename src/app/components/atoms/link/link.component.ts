import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  @Input() href: string = '#';
  @Input() text: string = '#';
  constructor() {}

  ngOnInit(): void {}
}
