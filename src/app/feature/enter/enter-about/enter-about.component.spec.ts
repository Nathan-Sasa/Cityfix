import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAboutComponent } from './enter-about.component';

describe('EnterAboutComponent', () => {
  let component: EnterAboutComponent;
  let fixture: ComponentFixture<EnterAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
