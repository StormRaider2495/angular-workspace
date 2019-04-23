import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonGameComponentsService {

  constructor() { }

  private clickCountStatus = new BehaviorSubject<number>(0);
  private clickCountStatusRep = new BehaviorSubject<number>(0);

  clickCount = this.clickCountStatus.asObservable();
  clickCountRep = this.clickCountStatusRep.asObservable();

  updateClickCount(status: number) {
    console.log('in service; value: ' + status);
    this.clickCountStatus.next(status);
  }

  updateClickCountRep(status: number) {
    console.log('in service; value: ' + status);
    this.clickCountStatusRep.next(status);
  }

  isCommonFactoryAvailable(): boolean {
    return true;
  }
}
