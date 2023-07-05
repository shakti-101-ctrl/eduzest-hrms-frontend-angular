import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSalaryAssignmentComponent } from './emp-salary-assignment.component';

describe('EmpSalaryAssignmentComponent', () => {
  let component: EmpSalaryAssignmentComponent;
  let fixture: ComponentFixture<EmpSalaryAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSalaryAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpSalaryAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
