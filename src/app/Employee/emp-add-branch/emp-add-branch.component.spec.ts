import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddBranchComponent } from './emp-add-branch.component';

describe('EmpAddBranchComponent', () => {
  let component: EmpAddBranchComponent;
  let fixture: ComponentFixture<EmpAddBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAddBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAddBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
