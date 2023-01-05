import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyDarkComponent } from './typography-dark.component';

describe('TypographyDarkComponent', () => {
  let component: TypographyDarkComponent;
  let fixture: ComponentFixture<TypographyDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypographyDarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
