import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepcialitiesComponent } from './sepcialities.component';

describe('SepcialitiesComponent', () => {
  let component: SepcialitiesComponent;
  let fixture: ComponentFixture<SepcialitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepcialitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SepcialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
