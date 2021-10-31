import { Component, OnInit } from '@angular/core';
import {recipe} from "../../interfaces/recipe";
import {choice} from "../../interfaces/choice";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  recipes: recipe[] = [];
  choices: choice[] = [
    {
      choiceOf: "bun",
      type: 'single',
      options: [
        {
          value: 'normal',
          name: 'Normal',
          imageUrl: '/assets/choices/bun.png',
          color: 'brown1'
        },
        {
          value: 'full grain',
          name: 'Full grain',
          imageUrl: '/assets/choices/bun_full_grain.png',
          color: 'brown2'
        }
      ]
    },
    {
      choiceOf: "meat",
      type: 'single',
      options: [
        {
          value: 'beef',
          name: 'Beef',
          imageUrl: '/assets/choices/beef.png',
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
      choiceOf: "garnish",
      type: 'multiple',
      options: [
        {
          value: 'salad',
          name: 'Salad',
          imageUrl: '/assets/choices/salad.png',
          color: 'green'
        },
        {
          value: 'cucumber',
          name: 'Cucumber',
          imageUrl: '/assets/choices/cucumber.png',
          color: 'green'
        },
        {
          value: 'tomato',
          name: 'Tomato',
          imageUrl: '/assets/choices/tomato.png',
          color: 'red'
        }
      ]
    },
    {
      choiceOf: "sauce",
      type: 'multiple',
      options: [
        {
          value: 'ketchup',
          name: 'Ketchup',
          imageUrl: '/assets/choices/ketchup.png',
          color: 'red'
        },
        {
          value: 'mayo',
          name: 'Mayo',
          imageUrl: '/assets/choices/mayo.png',
          color: 'gray'
        }
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
    window.scrollTo(0, 0);
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
