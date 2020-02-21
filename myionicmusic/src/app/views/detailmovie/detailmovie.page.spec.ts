import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailmoviePage } from './detailmovie.page';

describe('DetailmoviePage', () => {
  let component: DetailmoviePage;
  let fixture: ComponentFixture<DetailmoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailmoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailmoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
