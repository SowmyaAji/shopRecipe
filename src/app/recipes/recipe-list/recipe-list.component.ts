import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test', 'Testing content', 'http://picturetherecipe.com/wp-content/uploads/2018/09/Banana-Bread-with-Honey-Oats-Walnuts-by-PictureTheRecipe-Featured-1-680x900.jpg'),
    new Recipe('Second One', 'Testing content', 'http://picturetherecipe.com/wp-content/uploads/2018/09/Banana-Bread-with-Honey-Oats-Walnuts-by-PictureTheRecipe-Featured-1-680x900.jpg')
  ];



  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    console.log(this.recipeSelected);
    this.recipeSelected.emit(recipe);
  }
}
