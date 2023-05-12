import { RecipeModel } from '@models/recipe.model.tsx';

export interface RecipesState {
  desserts: RecipeModel[];
  breakfasts: RecipeModel[];
  recipes: RecipeModel[];
  dinners: RecipeModel[];
}

export const recipesInitialState: RecipesState = {
  desserts: [],
  breakfasts: [],
  recipes: [],
  dinners: []
};
