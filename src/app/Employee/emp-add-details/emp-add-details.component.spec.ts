import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddDetailsComponent } from './emp-add-details.component';

describe('EmpAddDetailsComponent', () => {
  let component: EmpAddDetailsComponent;
  let fixture: ComponentFixture<EmpAddDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAddDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
