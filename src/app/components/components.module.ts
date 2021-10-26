import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ChoiceFormComponent } from './choice-form/choice-form.component';
import { RecommendedRecipesComponent } from './recommended-recipes/recommended-recipes.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ToolbarComponent, ChoiceFormComponent, RecommendedRecipesComponent],
  exports: [ToolbarComponent, ChoiceFormComponent, RecommendedRecipesComponent]
})
export class ComponentsModule {}
