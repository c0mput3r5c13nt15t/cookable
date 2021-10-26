import {Component, Input, OnInit} from '@angular/core';
import {recipe} from "../../interfaces/recipe";

@Component({
  selector: 'app-recommended-recipes',
  templateUrl: './recommended-recipes.component.html',
  styleUrls: ['./recommended-recipes.component.scss']
})
export class RecommendedRecipesComponent implements OnInit {
  @Input() recipes: recipe[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipes);
  }
}
