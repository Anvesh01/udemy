import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe
  constructor(private recipeService:RecipeService, private shoppingList:ShoppingListService) { }

  ngOnInit(): void {
  }

  toShoppingList(){
   // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
   this.shoppingList.addIngredientsFromShoppingList(this.recipe.ingredients)
  }

}
