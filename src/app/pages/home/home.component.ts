import { Component, OnInit } from '@angular/core';
import {option} from "../../interfaces/option";
import {recipe} from "../../interfaces/recipe";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes: recipe[] = [];
  choices: option[][] = [
    [
      {
        value: 'hearty',
        name: 'Hearty',
        imageUrl: '/assets/stock%20footage/salad.png',
        color: 'green'
      },
      {
        value: 'sweet',
        name: 'Sweet',
        imageUrl: '/assets/stock%20footage/blueberries.png',
        color: 'blue'
      }
    ]
  ]

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe({
      next: value => {
        const val: any = value;
        this.recipes = val.recipes;
      }
    })
  }

}
