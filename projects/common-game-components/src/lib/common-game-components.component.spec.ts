import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonGameComponentsComponent } from './common-game-components.component';

describe('CommonGameComponentsComponent', () => {
  let component: CommonGameComponentsComponent;
  let fixture: ComponentFixture<CommonGameComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonGameComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonGameComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
