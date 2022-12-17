import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLaptopbrandComponent } from './update-laptopbrand.component';

describe('UpdateLaptopbrandComponent', () => {
  let component: UpdateLaptopbrandComponent;
  let fixture: ComponentFixture<UpdateLaptopbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLaptopbrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLaptopbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
