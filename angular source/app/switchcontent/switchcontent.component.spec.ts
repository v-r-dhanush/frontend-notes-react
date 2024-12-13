import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchcontentComponent } from './switchcontent.component';

describe('SwitchcontentComponent', () => {
  let component: SwitchcontentComponent;
  let fixture: ComponentFixture<SwitchcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
