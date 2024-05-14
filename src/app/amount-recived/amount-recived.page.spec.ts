import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmountRecivedPage } from './amount-recived.page';

describe('AmountRecivedPage', () => {
  let component: AmountRecivedPage;
  let fixture: ComponentFixture<AmountRecivedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountRecivedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
