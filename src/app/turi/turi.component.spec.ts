import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuriComponent } from './turi.component';

describe('TuriComponent', () => {
  let component: TuriComponent;
  let fixture: ComponentFixture<TuriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
