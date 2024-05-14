import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnusedEpinPage } from './unused-epin.page';

describe('UnusedEpinPage', () => {
  let component: UnusedEpinPage;
  let fixture: ComponentFixture<UnusedEpinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UnusedEpinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
