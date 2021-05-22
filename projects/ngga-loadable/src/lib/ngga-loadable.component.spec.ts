import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NggaLoadableComponent } from './ngga-loadable.component';

describe('NggaLoadableComponent', () => {
  let component: NggaLoadableComponent;
  let fixture: ComponentFixture<NggaLoadableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NggaLoadableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NggaLoadableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
