import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmBucketComponent } from './film-bucket.component';

describe('FilmBucketComponent', () => {
  let component: FilmBucketComponent;
  let fixture: ComponentFixture<FilmBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
