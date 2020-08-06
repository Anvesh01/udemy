import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
public recipeSelected =new EventEmitter<Recipe>();

constructor(private shoppingList:ShoppingListService){}

 private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
     'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('meat',10),
        new Ingredient('chicken',5)
      ]),

    new Recipe('A Test Recipe', 
    'This is simply a test2', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
        new Ingredient('apple',10),
        new Ingredient('mango',5)
    ])
  ];
 getRecipe(){
   return this.recipes.slice();
 }
//  addIngredientsToShoppingList(ingredients:Ingredient[]){
// this.shoppingList.addIngredientsFromShoppingList(ingredients)
//  }
}
