import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninContainerComponent } from './signin-container.component';

describe('SigninContainerComponent', () => {
  let component: SigninContainerComponent;
  let fixture: ComponentFixture<SigninContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigninContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
