import {
  Attribute,
  Component,
  Inject,
  Optional,
  NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// #docregion
@Component({
  selector: 'hero-title',
  template: `
    <h1>{{titlePrefix}} {{title}}</h1>
    <button (click)="ok()">OK</button>
    <p>{{ msg }}</p>
  `
})
class TitleComponent {
  msg = '';
  constructor(
    @Inject('titlePrefix') @Optional() titlePrefix,
    @Attribute('title') title
  ) {
    this.titlePrefix = titlePrefix;
    this.title = title;
  }

  ok() {
    this.msg = 'OK!';
  }
}
// #enddocregion

@Component({
  selector: 'hero-di-inject-additional',
  template: `<hero-title title="Tour of Heroes">
  </hero-title>`
})
class AppComponent { }

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    TitleComponent
  ],
  bootstrap: [ AppComponent ]
})
export class HeroesDIInjectAdditionalModule { }
