import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayCakesComponent } from './birthday-cakes.component';

describe('BirthdayCakesComponent', () => {
  let component: BirthdayCakesComponent;
  let fixture: ComponentFixture<BirthdayCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
