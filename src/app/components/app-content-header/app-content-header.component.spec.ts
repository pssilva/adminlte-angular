import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContentHeaderComponent } from './app-content-header.component';

describe('AppContentHeaderComponent', () => {
  let component: AppContentHeaderComponent;
  let fixture: ComponentFixture<AppContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppContentHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
