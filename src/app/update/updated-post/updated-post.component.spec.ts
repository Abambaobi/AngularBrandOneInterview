import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedPostComponent } from './updated-post.component';

describe('UpdatePostComponent', () => {
  let component: UpdatedPostComponent;
  let fixture: ComponentFixture<UpdatedPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatedPostComponent]
    });
    fixture = TestBed.createComponent(UpdatedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
