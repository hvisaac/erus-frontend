import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDNAComponent } from './main-dna.component';

describe('MainDNAComponent', () => {
  let component: MainDNAComponent;
  let fixture: ComponentFixture<MainDNAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDNAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
