import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwordPageComponent } from './sword-page.component';

describe('SwordPageComponent', () => {
  let component: SwordPageComponent;
  let fixture: ComponentFixture<SwordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwordPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
