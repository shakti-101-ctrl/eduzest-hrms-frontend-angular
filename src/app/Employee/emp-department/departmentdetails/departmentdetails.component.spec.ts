import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentdetailsComponent } from './departmentdetails.component';

describe('DepartmentdetailsComponent', () => {
  let component: DepartmentdetailsComponent;
  let fixture: ComponentFixture<DepartmentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
