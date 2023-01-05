import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconhographyComponent } from './iconhography.component';

describe('IconhographyComponent', () => {
  let component: IconhographyComponent;
  let fixture: ComponentFixture<IconhographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconhographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconhographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
