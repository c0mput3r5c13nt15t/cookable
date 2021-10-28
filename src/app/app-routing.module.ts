import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {RecipeComponent} from "./pages/recipe/recipe.component";
import {AboutComponent} from "./pages/about/about.component";
import {TermsComponent} from "./pages/terms/terms.component";

const routes: Routes = [
  {
    path: 'recipes',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'terms',
    component: TermsComponent
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
