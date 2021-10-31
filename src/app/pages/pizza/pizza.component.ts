import { Component, OnInit } from '@angular/core';
import {recipe} from "../../interfaces/recipe";
import {choice} from "../../interfaces/choice";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  recipes: recipe[] = [];
  choices: choice[] = [
    {
      choiceOf: "dough",
      type: 'single',
      options: [
        {
          value: 'normal',
          name: 'Normal',
          imageUrl: '/assets/choices/dough.png',
          color: 'gray'
        },
        {
          value: 'full grain',
          name: 'Full grain',
          imageUrl: '/assets/choices/dough_full_grain.png',
          color: 'brown1'
        }
      ]
    },
    {
      choiceOf: "sauce",
      type: 'single',
      options: [
        {
          value: 'tomato sauce',
          name: 'Tomato sauce',
          imageUrl: '/assets/choices/pizza_sauce.png',
          color: 'red'
        },
      ]
    },
    {
      choiceOf: "meat",
      type: 'multiple',
      options: [
        {
          value: 'salami',
          name: 'Salami',
          imageUrl: '/assets/choices/salami.png',
          color: 'red'
        },
        {
          value: 'fish',
          name: 'Fish',
          imageUrl: '/assets/choices/fish.png',
          color: 'orange'
        },
        {
          value: 'tofu',
          name: 'Tofu',
          imageUrl: '/assets/choices/tofu.png',
          color: 'yellow'
        }
      ]
    },
    {
      choiceOf: "herb",
      type: 'multiple',
      options: [
        {
          value: 'pineapple',
          name: 'Pineapple',
          imageUrl: '/assets/choices/pineapple.png',
          color: 'yellow'
        },
        {
          value: 'mushrooms',
          name: 'Mushrooms',
          imageUrl: '/assets/choices/mushrooms.png',
          color: 'gray'
        },
        {
          value: 'parsley',
          name: 'Parsley',
          imageUrl: '/assets/choices/parsley.png',
          color: 'green'
        },
      ]
    },
    {
      choiceOf: "cheese",
      type: 'multiple',
      options: [
        {
          value: 'normal',
          name: 'Normal',
          imageUrl: '/assets/choices/cheese1.png',
          color: 'yellow'
        },
        {
          value: 'other',
          name: 'Other',
          imageUrl: '/assets/choices/cheese2.png',
          color: 'yellow'
        }
      ]
    },
  ]
  private chosen: string[][] = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    if (this.recipes.length > 0) {
      window.scrollTo(0, 948*this.choices.length);
    } else {
      window.scrollTo(0, 0);
    }
  }

  chose(value: any) {
    this.chosen.push([value]);
    if (this.chosen.length == this.choices.length) {
      this.recipesService.cook(this.chosen).subscribe({
        next: value => {
          const val: any = value;
          this.recipes = val.recipes;
        }
      });
    }
  }

}
