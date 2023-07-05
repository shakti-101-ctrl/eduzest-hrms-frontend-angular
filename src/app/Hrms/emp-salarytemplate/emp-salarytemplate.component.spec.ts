import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSalarytemplateComponent } from './emp-salarytemplate.component';

describe('EmpSalarytemplateComponent', () => {
  let component: EmpSalarytemplateComponent;
  let fixture: ComponentFixture<EmpSalarytemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSalarytemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpSalarytemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
