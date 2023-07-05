import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddDesignationComponent } from './emp-add-designation.component';

describe('EmpAddDesignationComponent', () => {
  let component: EmpAddDesignationComponent;
  let fixture: ComponentFixture<EmpAddDesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAddDesignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAddDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
