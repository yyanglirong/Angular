import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmovieComponent } from './detailmovie.component';

describe('DetailmovieComponent', () => {
  let component: DetailmovieComponent;
  let fixture: ComponentFixture<DetailmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
