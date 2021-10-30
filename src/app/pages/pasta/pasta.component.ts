import { Component, OnInit } from '@angular/core';
import {recipe} from "../../interfaces/recipe";
import {choice} from "../../interfaces/choice";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.scss']
})
export class PastaComponent implements OnInit {
  recipes: recipe[] = [];
  choices: choice[] = [
    {
      choiceOf: "noodles",
      type: 'single',
      options: [
        {
          value: 'spaghetti',
          name: 'Spaghetti',
          imageUrl: '/assets/choices/spaghetti.png',
          color: 'yellow'
        },
        {
          value: 'penne',
          name: 'Penne',
          imageUrl: '/assets/choices/penne.png',
          color: 'yellow'
        },
        {
          value: 'full grain penne',
          name: 'Full grain',
          imageUrl: '/assets/choices/penne_full_grain.png',
          color: 'brown2'
        }
      ]
    },
    {
      choiceOf: "sauce",
      type: 'single',
      options: [
        {
          value: 'ketchup',
          name: 'Ketchup',
          imageUrl: '/assets/choices/tomato_sauce.png',
          color: 'red'
        },
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
      choiceOf: "herb",
      type: 'multiple',
      options: [
        {
          value: 'onion',
          name: 'Onion',
          imageUrl: '/assets/choices/onion.png',
          color: 'red'
        },
        {
          value: 'chives',
          name: 'Chives',
          imageUrl: '/assets/choices/chives.png',
          color: 'green'
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
