import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplHearingComponent } from './apl-hearing.component';

describe('AplHearingComponent', () => {
  let component: AplHearingComponent;
  let fixture: ComponentFixture<AplHearingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplHearingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplHearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
