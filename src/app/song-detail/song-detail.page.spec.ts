import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDetailPage } from './song-detail.page';

describe('SongDetailPage', () => {
  let component: SongDetailPage;
  let fixture: ComponentFixture<SongDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
