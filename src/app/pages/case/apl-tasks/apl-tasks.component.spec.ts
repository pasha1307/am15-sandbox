import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplTasksComponent } from './apl-tasks.component';

describe('AplTasksComponent', () => {
  let component: AplTasksComponent;
  let fixture: ComponentFixture<AplTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
