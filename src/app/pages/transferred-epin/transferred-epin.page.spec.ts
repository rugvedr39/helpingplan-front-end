import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferredEpinPage } from './transferred-epin.page';

describe('TransferredEpinPage', () => {
  let component: TransferredEpinPage;
  let fixture: ComponentFixture<TransferredEpinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferredEpinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
