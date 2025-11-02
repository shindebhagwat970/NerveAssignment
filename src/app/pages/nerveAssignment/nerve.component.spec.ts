import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerveComponent } from './nerve.component';

describe('NerveComponent', () => {
  let component: NerveComponent;
  let fixture: ComponentFixture<NerveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NerveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NerveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
