import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmActive } from './hm-active';

describe('HmActive', () => {
  let component: HmActive;
  let fixture: ComponentFixture<HmActive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmActive],
    }).compileComponents();

    fixture = TestBed.createComponent(HmActive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
