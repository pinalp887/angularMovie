import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieregisterComponent } from './movieregister.component';

describe('MovieregisterComponent', () => {
  let component: MovieregisterComponent;
  let fixture: ComponentFixture<MovieregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
