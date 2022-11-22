import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNumbersComponent } from './get-prime-numbers.component';

describe('GetPrimeNumbersComponent', () => {
  let component: PrimeNumbersComponent;
  let fixture: ComponentFixture<PrimeNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
