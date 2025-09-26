import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hechizos } from './hechizos';

describe('Hechizos', () => {
  let component: Hechizos;
  let fixture: ComponentFixture<Hechizos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hechizos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hechizos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
