import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarchefComponent } from './navbarchef.component';

describe('NavbarchefComponent', () => {
  let component: NavbarchefComponent;
  let fixture: ComponentFixture<NavbarchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarchefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
