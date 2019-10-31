
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test', 'Testing content', 'http://picturetherecipe.com/wp-content/uploads/2018/09/Banana-Bread-with-Honey-Oats-Walnuts-by-PictureTheRecipe-Featured-1-680x900.jpg', [
            new Ingredient('Honey', 1),
            new Ingredient('Oats', 10)]
        ),
        new Recipe('Second One', 'Testing content', 'http://picturetherecipe.com/wp-content/uploads/2018/09/Banana-Bread-with-Honey-Oats-Walnuts-by-PictureTheRecipe-Featured-1-680x900.jpg', [
            new Ingredient('Walnuts', 20),
            new Ingredient('Banana Bread', 2)
        ])
    ];

    constructor(private shoppingService: ShoppingService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addToShopList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients)
    }
}