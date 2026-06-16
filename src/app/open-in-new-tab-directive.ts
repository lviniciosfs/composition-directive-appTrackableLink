import { Directive } from '@angular/core';

@Directive({
  selector: '[appOpenInNewTabDirective]',
  host: {
    'target': '_blank'
  }
})
export class OpenInNewTabDirective {

  constructor() { }

}
