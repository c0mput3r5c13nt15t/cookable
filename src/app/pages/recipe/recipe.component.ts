import { Component, OnInit } from '@angular/core';
import {recipe} from "../../interfaces/recipe";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: recipe = {
    name: '',
    ingredients: [],
    eta: 1,
    price: 0,
    description: ''
  };

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('recipeId')) {
        // @ts-ignore Can't be null since check in if statement
        this.recipesService.getRecipe(+this.activatedRoute.snapshot.paramMap.get('recipeId')).subscribe({
          next: value => {
            const val: any = value;
            this.recipe = val.recipe;
          }
        });
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

}
