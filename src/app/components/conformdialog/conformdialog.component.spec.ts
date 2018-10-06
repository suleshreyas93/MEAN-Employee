import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformdialogComponent } from './conformdialog.component';

describe('ConformdialogComponent', () => {
  let component: ConformdialogComponent;
  let fixture: ComponentFixture<ConformdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConformdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
