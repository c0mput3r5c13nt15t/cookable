import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ChoiceFormComponent } from './choice-form/choice-form.component';
import { RecommendedRecipesComponent } from './recommended-recipes/recommended-recipes.component';
import { FooterComponent } from './footer/footer.component';
import { MultipleChoiceFormComponent } from './multiple-choice-form/multiple-choice-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ToolbarComponent, ChoiceFormComponent, MultipleChoiceFormComponent, RecommendedRecipesComponent, FooterComponent],
  exports:      [ToolbarComponent, ChoiceFormComponent, MultipleChoiceFormComponent, RecommendedRecipesComponent, FooterComponent]
})
export class ComponentsModule {}
