import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {RecipeComponent} from "./pages/recipe/recipe.component";

const routes: Routes = [
  {
    path: 'recipes',
    component: HomeComponent
  },
  {
    path: 'recipes/:recipeId',
    component: RecipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
