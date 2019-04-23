import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonGameComponentsModule } from '../../../common-game-components/src/lib/common-game-components.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonGameComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
