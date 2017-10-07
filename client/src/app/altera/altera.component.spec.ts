import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraComponent } from './altera.component';

describe('AlteraComponent', () => {
  let component: AlteraComponent;
  let fixture: ComponentFixture<AlteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
