import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmsgComponent } from './readmsg.component';

describe('ReadmsgComponent', () => {
  let component: ReadmsgComponent;
  let fixture: ComponentFixture<ReadmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
