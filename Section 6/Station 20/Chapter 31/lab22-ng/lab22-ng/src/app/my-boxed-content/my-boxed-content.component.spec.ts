import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBoxedContentComponent } from './my-boxed-content.component';

describe('MyBoxedContentComponent', () => {
  let component: MyBoxedContentComponent;
  let fixture: ComponentFixture<MyBoxedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBoxedContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBoxedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
