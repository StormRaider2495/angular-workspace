import { CommonGameComponentsService } from './common-game-components.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-common-game-components',
  template: `
    <div>
    <div style="text-align:center">
      <h1>
        Welcome to {{ title }}!
      </h1>
      <br>
      common-game-components works!
      <br>
      The input text is {{text}}.
      <br>
      Click the button below to fire an Observable from 'rxjs';
      <button (click)="onClick()">Click me to fire observable</button>
      <br>
      numberOfClicks = {{numberOfClicks}}
      <br>
      The data received from game-engine-component library is: {{countNumber}}
      <br><br><br>
    </div>
  `,
  styles: []
})

export class CommonGameComponentsComponent implements OnInit {

  @Input() text = '';
  title = 'common-game-components';
  numberOfClicks = 0;
  countNumber = 0;

  constructor(private commonService: CommonGameComponentsService) {
    this.commonService.clickCountRep.subscribe(data => this.updatecountNumber(data));
  }

  ngOnInit() {
  }

  onClick() {
    this.numberOfClicks++;
    console.log('Number of clicks: ' + this.numberOfClicks);
    this.commonService.updateClickCount(this.numberOfClicks);
  }

  updatecountNumber(data: number): void {
    if (data) {
      this.countNumber = data;
    }
  }

}
