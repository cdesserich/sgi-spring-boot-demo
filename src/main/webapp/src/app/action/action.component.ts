import { Component, input } from '@angular/core';
import { ActionPosition } from "../constants/actionPosition";
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'sgi-action',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss'
})
export class ActionComponent {

  link = input.required<string>()
  backgroundColor = input<string>('deepskyblue');
  position = input<ActionPosition>(ActionPosition.Middle);
  actionText = input<string>('');
  image = input.required<string>();
  altText = input<string>('');

  constructor(private httpClient: HttpClient) {
  }

  borderRadius() : string {
    switch (this.position()) {
      case ActionPosition.Left:
        return '20px 0 0 20px';
      case ActionPosition.Right:
        return '0 20px 20px 0';
    }
    return ''
  }

  handleClick() {
    this.httpClient.put('/api/logs', `Logging from Angular action ${this.link()}.`).subscribe(
      () => console.log(this.link())
    )
  }

  protected readonly ActionPosition = ActionPosition;
}
