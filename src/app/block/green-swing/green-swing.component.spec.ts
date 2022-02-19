import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSwingComponent } from './green-swing.component';

describe('GreenSwingComponent', () => {
  let component: GreenSwingComponent;
  let fixture: ComponentFixture<GreenSwingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenSwingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenSwingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
