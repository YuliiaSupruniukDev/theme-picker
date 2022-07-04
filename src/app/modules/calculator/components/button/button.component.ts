import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() action?: boolean = false;
  @Input() equal?: boolean = false;
  @Input() content: string | number = '';
}
