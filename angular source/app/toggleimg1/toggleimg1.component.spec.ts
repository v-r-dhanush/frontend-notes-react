import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toggleimg1Component } from './toggleimg1.component';

describe('Toggleimg1Component', () => {
  let component: Toggleimg1Component;
  let fixture: ComponentFixture<Toggleimg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toggleimg1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toggleimg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
