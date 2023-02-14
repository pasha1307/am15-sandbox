import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseOpenComponent } from './case-open.component';

describe('CaseOpenComponent', () => {
  let component: CaseOpenComponent;
  let fixture: ComponentFixture<CaseOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
