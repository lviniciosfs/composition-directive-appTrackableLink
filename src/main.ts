import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppTrackableLink } from "./app/app-trackable-link";

@Component({
  selector: 'app-root',
  template: `
    <a appAppTrackableLink trackingName="docs" href="https://angular.dev"> Angular Docs </a>
  `,
  imports: [AppTrackableLink],
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);
