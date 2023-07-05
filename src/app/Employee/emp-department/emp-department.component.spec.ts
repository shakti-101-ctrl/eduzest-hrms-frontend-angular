import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDepartmentComponent } from './emp-department.component';

describe('EmpDepartmentComponent', () => {
  let component: EmpDepartmentComponent;
  let fixture: ComponentFixture<EmpDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
