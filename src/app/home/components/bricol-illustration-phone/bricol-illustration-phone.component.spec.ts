import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BricolIllustrationPhoneComponent } from './bricol-illustration-phone.component';

describe('BricolIllustrationPhoneComponent', () => {
  let component: BricolIllustrationPhoneComponent;
  let fixture: ComponentFixture<BricolIllustrationPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BricolIllustrationPhoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BricolIllustrationPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
