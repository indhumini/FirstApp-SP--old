import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateCakesComponent } from './corporate-cakes.component';

describe('CorporateCakesComponent', () => {
  let component: CorporateCakesComponent;
  let fixture: ComponentFixture<CorporateCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
