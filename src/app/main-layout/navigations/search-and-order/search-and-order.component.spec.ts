import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndOrderComponent } from './search-and-order.component';

describe('SearchAndOrderComponent', () => {
  let component: SearchAndOrderComponent;
  let fixture: ComponentFixture<SearchAndOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAndOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
