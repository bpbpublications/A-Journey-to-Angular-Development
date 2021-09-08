import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwiceDetectionTestComponentComponent } from './twice-detection-test-component.component';

describe('TwiceDetectionTestComponentComponent', () => {
  let component: TwiceDetectionTestComponentComponent;
  let fixture: ComponentFixture<TwiceDetectionTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwiceDetectionTestComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwiceDetectionTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
