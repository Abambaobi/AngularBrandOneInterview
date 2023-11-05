import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAllPostComponent } from './add-all-post.component';

describe('AddAllPostComponent', () => {
  let component: AddAllPostComponent;
  let fixture: ComponentFixture<AddAllPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAllPostComponent]
    });
    fixture = TestBed.createComponent(AddAllPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
