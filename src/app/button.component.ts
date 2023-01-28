import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<button>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class ButtonComponent {
  @Input() text: string;
}
