import { Component, ViewEncapsulation } from '@angular/core';
import { CommonGameComponentsService } from './../../../common-game-components/src/lib/common-game-components.service';

@Component({
  selector: 'app-vocabulary-engine',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'vocabulary-game-engine';
  countNumber = 0;
  numberOfClicks = 0;

  constructor(private commonService: CommonGameComponentsService) {
    this.commonService.clickCount.subscribe(data => this.updatecountNumber(data));
  }

  updatecountNumber(data: number): void {
    if (data) {
      this.countNumber = data;
    }
  }

  onClick() {
    this.numberOfClicks++;
    console.log('Number of clicks: ' + this.numberOfClicks);
    this.commonService.updateClickCountRep(this.numberOfClicks);
  }
}
