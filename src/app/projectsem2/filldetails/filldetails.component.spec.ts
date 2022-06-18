import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilldetailsComponent } from './filldetails.component';

describe('FilldetailsComponent', () => {
  let component: FilldetailsComponent;
  let fixture: ComponentFixture<FilldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
