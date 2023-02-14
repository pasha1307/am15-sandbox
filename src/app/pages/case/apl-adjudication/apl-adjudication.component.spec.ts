import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplAdjudicationComponent } from './apl-adjudication.component';

describe('AplAdjudicationComponent', () => {
  let component: AplAdjudicationComponent;
  let fixture: ComponentFixture<AplAdjudicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplAdjudicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplAdjudicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
