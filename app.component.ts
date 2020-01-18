import { Component } from '@angular/core';

@Component({
  selector: 'sm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <sm-shoes></sm-shoes>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = "Sam's App"
}
