import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmusicComponent } from './detailmusic.component';

describe('DetailmusicComponent', () => {
  let component: DetailmusicComponent;
  let fixture: ComponentFixture<DetailmusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailmusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
