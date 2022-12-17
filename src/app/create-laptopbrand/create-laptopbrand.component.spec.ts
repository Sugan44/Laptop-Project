import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLaptopbrandComponent } from './create-laptopbrand.component';

describe('CreateLaptopbrandComponent', () => {
  let component: CreateLaptopbrandComponent;
  let fixture: ComponentFixture<CreateLaptopbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLaptopbrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLaptopbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
