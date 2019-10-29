import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEditListComponent } from './shopping-edit-list.component';

describe('ShoppingEditListComponent', () => {
  let component: ShoppingEditListComponent;
  let fixture: ComponentFixture<ShoppingEditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingEditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
