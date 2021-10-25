import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  choices = [['Direction', 'Hearty', 'Sweet'], ['Speed', 'Slow', 'Fast'], ['Cost', 'Expensive', 'Cheap']];

  constructor() { }

  ngOnInit(): void {
  }

}
