import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Turismo } from './turismo';

describe('Turismo', () => {
  let component: Turismo;
  let fixture: ComponentFixture<Turismo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Turismo],
    }).compileComponents();

    fixture = TestBed.createComponent(Turismo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
