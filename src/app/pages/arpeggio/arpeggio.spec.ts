import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Arpeggio } from './arpeggio';

describe('Arpeggio', () => {
  let component: Arpeggio;
  let fixture: ComponentFixture<Arpeggio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arpeggio],
    }).compileComponents();

    fixture = TestBed.createComponent(Arpeggio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
