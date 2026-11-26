import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPresentation } from './main-presentation';

describe('MainPresentation', () => {
  let component: MainPresentation;
  let fixture: ComponentFixture<MainPresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPresentation],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPresentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
