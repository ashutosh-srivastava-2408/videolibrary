/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideocenterComponent } from './videocenter.component';

describe('VideocenterComponent', () => {
  let component: VideocenterComponent;
  let fixture: ComponentFixture<VideocenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
