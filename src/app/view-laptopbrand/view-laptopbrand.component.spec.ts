import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLaptopbrandComponent } from './view-laptopbrand.component';

describe('ViewLaptopbrandComponent', () => {
  let component: ViewLaptopbrandComponent;
  let fixture: ComponentFixture<ViewLaptopbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLaptopbrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLaptopbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
