import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bargraph2Component } from './bargraph2.component';

describe('Bargraph2Component', () => {
  let component: Bargraph2Component;
  let fixture: ComponentFixture<Bargraph2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bargraph2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bargraph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
