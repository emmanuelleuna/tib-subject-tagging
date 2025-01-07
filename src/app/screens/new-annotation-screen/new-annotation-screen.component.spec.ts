import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnnotationScreenComponent } from './new-annotation-screen.component';

describe('NewAnnotationScreenComponent', () => {
  let component: NewAnnotationScreenComponent;
  let fixture: ComponentFixture<NewAnnotationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAnnotationScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAnnotationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
