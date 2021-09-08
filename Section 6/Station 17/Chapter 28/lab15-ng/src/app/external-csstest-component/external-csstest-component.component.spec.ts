import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalCSSTestComponentComponent } from './external-csstest-component.component';

describe('ExternalCSSTestComponentComponent', () => {
  let component: ExternalCSSTestComponentComponent;
  let fixture: ComponentFixture<ExternalCSSTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalCSSTestComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalCSSTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
