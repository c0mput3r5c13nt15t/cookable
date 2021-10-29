import { Component, OnInit } from '@angular/core';
import {recipe} from "../../interfaces/recipe";
import {RecipesService} from "../../services/recipes.service";
import {choice} from "../../interfaces/choice";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes: recipe[] = [];
  choices: choice[] = [
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
          value: 'tofu',
          name: 'Tofu',
          imageUrl: '/assets/choices/tofu.png',
          color: 'yellow'
        }
      ]
    },
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
          value: 'blueberries',
          name: 'Blueberries',
          imageUrl: '/assets/choices/blueberries.png',
          color: 'blue'
        },
        {
          value: 'cheese',
          name: 'Cheese',
          imageUrl: '/assets/choices/tofu.png',
          color: 'yellow'
        }
      ]
    }
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
    console.log(value);
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
