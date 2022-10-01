import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillDetailsDialogComponent } from './fill-details-dialog.component';

describe('FillDetailsDialogComponent', () => {
  let component: FillDetailsDialogComponent;
  let fixture: ComponentFixture<FillDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
