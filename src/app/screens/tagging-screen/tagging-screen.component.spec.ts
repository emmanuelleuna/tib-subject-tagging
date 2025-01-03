import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggingScreenComponent } from './tagging-screen.component';

describe('TaggingScreenComponent', () => {
  let component: TaggingScreenComponent;
  let fixture: ComponentFixture<TaggingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaggingScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaggingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
