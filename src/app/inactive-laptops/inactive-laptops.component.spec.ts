import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveLaptopsComponent } from './inactive-laptops.component';

describe('InactiveLaptopsComponent', () => {
  let component: InactiveLaptopsComponent;
  let fixture: ComponentFixture<InactiveLaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveLaptopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactiveLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
