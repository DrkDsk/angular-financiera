import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLoansComponent } from './get-loans.component';

describe('GetLoansComponent', () => {
  let component: GetLoansComponent;
  let fixture: ComponentFixture<GetLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
