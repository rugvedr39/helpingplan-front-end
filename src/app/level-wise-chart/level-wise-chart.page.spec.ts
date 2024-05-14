import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelWiseChartPage } from './level-wise-chart.page';

describe('LevelWiseChartPage', () => {
  let component: LevelWiseChartPage;
  let fixture: ComponentFixture<LevelWiseChartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelWiseChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
