import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { createCustomElement} from '@angular/elements';
import { CommonGameComponentsModule } from '../../../common-game-components/src/lib/common-game-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonGameComponentsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const appComponent = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('app-vocabulary-engine', appComponent);
  }
 }
