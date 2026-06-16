import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appTrackClickDirective]',
  host: {
    '(click)': 'teste()'
  }
})
export class TrackClickDirective {
  trackingName = input.required<string>();
  constructor() { }

  teste(){
    console.log('tracking:', this.trackingName());
  }

}
