import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ChoiceComponent } from './choice/choice.component';
import { DecideComponent } from './decide/decide.component';
import { ReceipeComponent } from './receipe/receipe.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ToolbarComponent, ChoiceComponent, DecideComponent, ReceipeComponent],
  exports: [ToolbarComponent, ChoiceComponent, DecideComponent, ReceipeComponent]
})
export class ComponentsModule {}
