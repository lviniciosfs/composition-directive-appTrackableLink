import { TrackClickDirective } from './track-click-directive';
import { SecureLinkDirective } from './secure-link-directive';
import { OpenInNewTabDirective } from './open-in-new-tab-directive';
import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appAppTrackableLink]',
  hostDirectives: [
    OpenInNewTabDirective,
    SecureLinkDirective,
    {
      directive: TrackClickDirective,
      inputs: ['trackingName']
    }
  ]
})
export class AppTrackableLink {
  trackingName = input.required<string>();

  constructor() { }

}
