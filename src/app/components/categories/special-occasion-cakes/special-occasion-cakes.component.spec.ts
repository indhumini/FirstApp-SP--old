import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOccasionCakesComponent } from './special-occasion-cakes.component';

describe('SpecialOccasionCakesComponent', () => {
  let component: SpecialOccasionCakesComponent;
  let fixture: ComponentFixture<SpecialOccasionCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialOccasionCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOccasionCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
