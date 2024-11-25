import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAmisComponent } from './panel-amis.component';

describe('PanelAmisComponent', () => {
  let component: PanelAmisComponent;
  let fixture: ComponentFixture<PanelAmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelAmisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelAmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
