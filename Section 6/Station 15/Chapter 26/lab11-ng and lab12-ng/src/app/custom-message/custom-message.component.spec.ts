import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMessageComponent } from './custom-message.component';

describe('CustomMessageComponent', () => {
  let component: CustomMessageComponent;
  let fixture: ComponentFixture<CustomMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
