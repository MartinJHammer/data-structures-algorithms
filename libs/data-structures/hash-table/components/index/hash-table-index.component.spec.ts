import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashTableIndexComponent } from './hash-table-index.component';

describe('HashTableIndexComponent', () => {
  let component: HashTableIndexComponent;
  let fixture: ComponentFixture<HashTableIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashTableIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HashTableIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
