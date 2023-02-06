import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  animations: [
    trigger('myAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateX(0)', opacity: 1 })),
        animate('200ms', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('300ms', style({ transform: 'translateX(100%)', opacity: 0 })),
        animate('200ms', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class ButtonComponent implements OnInit {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() htmlType: 'button' | 'submit' | 'menu' | 'reset' = 'button';
  @Input() padding: string = '';
  @Input() color: string = '';
  @Input() style: string = '';
  @Input() btnClass: string = '';
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
