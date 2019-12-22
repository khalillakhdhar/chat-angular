import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadtopicComponent } from './readtopic.component';

describe('ReadtopicComponent', () => {
  let component: ReadtopicComponent;
  let fixture: ComponentFixture<ReadtopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadtopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadtopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
