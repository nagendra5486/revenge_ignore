import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nag } from './nag';

describe('Nag', () => {
  let component: Nag;
  let fixture: ComponentFixture<Nag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nag],
    }).compileComponents();

    fixture = TestBed.createComponent(Nag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
