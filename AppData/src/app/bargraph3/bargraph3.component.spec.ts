import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bargraph3Component } from './bargraph3.component';

describe('Bargraph3Component', () => {
  let component: Bargraph3Component;
  let fixture: ComponentFixture<Bargraph3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bargraph3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bargraph3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
