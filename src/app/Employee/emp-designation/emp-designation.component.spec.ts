import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDesignationComponent } from './emp-designation.component';

describe('EmpDesignationComponent', () => {
  let component: EmpDesignationComponent;
  let fixture: ComponentFixture<EmpDesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDesignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
