import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Oreo Shake',
      'A super-tasty drink',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png',
      [new Ingredient('Milk', 1), new Ingredient('Oreo', 4)]
    ),
    new Recipe(
      'Double Patty burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/McDonald%27s_Quarter_Pounder_with_Cheese%2C_United_States.jpg/1200px-McDonald%27s_Quarter_Pounder_with_Cheese%2C_United_States.jpg',
      [new Ingredient('Bun', 1), new Ingredient('patty', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addingIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
}
