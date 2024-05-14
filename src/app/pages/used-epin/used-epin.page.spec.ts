import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsedEpinPage } from './used-epin.page';

describe('UsedEpinPage', () => {
  let component: UsedEpinPage;
  let fixture: ComponentFixture<UsedEpinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedEpinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
