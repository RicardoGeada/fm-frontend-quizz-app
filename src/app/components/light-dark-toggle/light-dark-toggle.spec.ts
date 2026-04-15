import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDarkToggle } from './light-dark-toggle';

describe('LightDarkToggle', () => {
  let component: LightDarkToggle;
  let fixture: ComponentFixture<LightDarkToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightDarkToggle],
    }).compileComponents();

    fixture = TestBed.createComponent(LightDarkToggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
