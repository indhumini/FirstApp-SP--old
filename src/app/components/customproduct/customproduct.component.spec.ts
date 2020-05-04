import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomproductComponent } from './customproduct.component';

describe('CustomproductComponent', () => {
  let component: CustomproductComponent;
  let fixture: ComponentFixture<CustomproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
