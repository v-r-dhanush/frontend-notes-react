import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toggleimg2Component } from './toggleimg2.component';

describe('Toggleimg2Component', () => {
  let component: Toggleimg2Component;
  let fixture: ComponentFixture<Toggleimg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toggleimg2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toggleimg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
