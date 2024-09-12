import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userListComponent } from './user-list.component';

describe('userListComponent', () => {
  let component: userListComponent;
  let fixture: ComponentFixture<userListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [userListComponent]
    });
    fixture = TestBed.createComponent(userListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
