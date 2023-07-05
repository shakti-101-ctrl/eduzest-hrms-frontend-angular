import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBranchComponent } from './emp-branch.component';

describe('EmpBranchComponent', () => {
  let component: EmpBranchComponent;
  let fixture: ComponentFixture<EmpBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
