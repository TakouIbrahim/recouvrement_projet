import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagnieFormComponent } from './compagnie-form.component';

describe('CompagnieFormComponent', () => {
  let component: CompagnieFormComponent;
  let fixture: ComponentFixture<CompagnieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompagnieFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompagnieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
