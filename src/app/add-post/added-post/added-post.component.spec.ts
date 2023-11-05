import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedPostComponent } from './added-post.component';

describe('AddedPostComponent', () => {
  let component: AddedPostComponent;
  let fixture: ComponentFixture<AddedPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddedPostComponent]
    });
    fixture = TestBed.createComponent(AddedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
