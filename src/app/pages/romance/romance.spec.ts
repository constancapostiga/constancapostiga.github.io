import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Romance } from './romance';

describe('Romance', () => {
  let component: Romance;
  let fixture: ComponentFixture<Romance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Romance],
    }).compileComponents();

    fixture = TestBed.createComponent(Romance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
