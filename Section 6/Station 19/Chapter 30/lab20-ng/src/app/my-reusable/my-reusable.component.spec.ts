import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReusableComponent } from './my-reusable.component';

describe('MyReusableComponent', () => {
  let component: MyReusableComponent;
  let fixture: ComponentFixture<MyReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReusableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
