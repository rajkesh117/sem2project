import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletoneComponent } from './templetone.component';

describe('TempletoneComponent', () => {
  let component: TempletoneComponent;
  let fixture: ComponentFixture<TempletoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempletoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
