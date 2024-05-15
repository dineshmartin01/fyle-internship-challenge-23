import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCardComponent } from './angular-card.component';

describe('AngularCardComponent', () => {
  let component: AngularCardComponent;
  let fixture: ComponentFixture<AngularCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularCardComponent]
    });
    fixture = TestBed.createComponent(AngularCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
