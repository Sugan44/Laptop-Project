import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopbrandListComponent } from './laptopbrand-list.component';

describe('LaptopbrandListComponent', () => {
  let component: LaptopbrandListComponent;
  let fixture: ComponentFixture<LaptopbrandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopbrandListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopbrandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
