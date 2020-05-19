import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesCupcakesComponent } from './cookies-cupcakes.component';

describe('CookiesCupcakesComponent', () => {
  let component: CookiesCupcakesComponent;
  let fixture: ComponentFixture<CookiesCupcakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiesCupcakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesCupcakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
