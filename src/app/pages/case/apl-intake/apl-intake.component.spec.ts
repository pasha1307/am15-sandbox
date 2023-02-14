import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplIntakeComponent } from './apl-intake.component';

describe('AplIntakeComponent', () => {
  let component: AplIntakeComponent;
  let fixture: ComponentFixture<AplIntakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplIntakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
