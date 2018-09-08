import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDevComponent } from './category-dev.component';

describe('CategoryDevComponent', () => {
  let component: CategoryDevComponent;
  let fixture: ComponentFixture<CategoryDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
