import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvComponent } from './mv.component';

describe('MvComponent', () => {
  let component: MvComponent;
  let fixture: ComponentFixture<MvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
