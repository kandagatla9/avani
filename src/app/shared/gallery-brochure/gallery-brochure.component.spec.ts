import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBrochureComponent } from './gallery-brochure.component';

describe('GalleryBrochureComponent', () => {
  let component: GalleryBrochureComponent;
  let fixture: ComponentFixture<GalleryBrochureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryBrochureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
