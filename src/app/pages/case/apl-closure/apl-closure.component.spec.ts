import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplClosureComponent } from './apl-closure.component';

describe('AplClosureComponent', () => {
  let component: AplClosureComponent;
  let fixture: ComponentFixture<AplClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplClosureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
