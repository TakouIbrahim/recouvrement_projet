import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalInfoComponent } from './final-info.component';

describe('FinalInfoComponent', () => {
  let component: FinalInfoComponent;
  let fixture: ComponentFixture<FinalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
