import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddDepartmentComponent } from './emp-add-department.component';

describe('EmpAddDepartmentComponent', () => {
  let component: EmpAddDepartmentComponent;
  let fixture: ComponentFixture<EmpAddDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAddDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAddDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
