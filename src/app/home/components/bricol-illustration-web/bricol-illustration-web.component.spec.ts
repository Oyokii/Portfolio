import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BricolIllustrationWebComponent } from './bricol-illustration-web.component';

describe('BricolIllustrationWebComponent', () => {
  let component: BricolIllustrationWebComponent;
  let fixture: ComponentFixture<BricolIllustrationWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BricolIllustrationWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BricolIllustrationWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
