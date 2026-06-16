import { Directive } from '@angular/core';

@Directive({
  selector: '[appSecureLinkDirective]',
  host: {
    'target': 'noopener noreferrer'
  }
})
export class SecureLinkDirective {

  constructor() { }

}
