import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopboxComponent } from './topbox.component';

describe('TopboxComponent', () => {
  let component: TopboxComponent;
  let fixture: ComponentFixture<TopboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
