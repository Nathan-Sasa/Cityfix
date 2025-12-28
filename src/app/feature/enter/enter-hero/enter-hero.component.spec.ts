import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterHeroComponent } from './enter-hero.component';

describe('EnterHeroComponent', () => {
  let component: EnterHeroComponent;
  let fixture: ComponentFixture<EnterHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
