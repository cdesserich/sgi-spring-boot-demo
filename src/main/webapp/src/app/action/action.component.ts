import { Component, input } from '@angular/core';
import { ActionPosition } from "../constants/actionPosition";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'sgi-action',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss'
})
export class ActionComponent {

  backgroundColor = input<string>('deepskyblue');
  position = input<ActionPosition>(ActionPosition.Middle);
  actionText = input<string>('');
  image = input.required<string>();
  altText = input<string>('');

  borderRadius() : string {
    switch (this.position()) {
      case ActionPosition.Left:
        return '20px 0 0 20px';
      case ActionPosition.Right:
        return '0 20px 20px 0';
    }
    return ''
  }

  protected readonly ActionPosition = ActionPosition;
}
