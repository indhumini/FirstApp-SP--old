import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingCakesComponent } from './wedding-cakes.component';

describe('WeddingCakesComponent', () => {
  let component: WeddingCakesComponent;
  let fixture: ComponentFixture<WeddingCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
