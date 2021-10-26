import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedRecipesComponent } from './recommended-recipes.component';

describe('RecommendedRecipesComponent', () => {
  let component: RecommendedRecipesComponent;
  let fixture: ComponentFixture<RecommendedRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
