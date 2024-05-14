import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferEpinPage } from './transfer-epin.page';

describe('TransferEpinPage', () => {
  let component: TransferEpinPage;
  let fixture: ComponentFixture<TransferEpinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferEpinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
