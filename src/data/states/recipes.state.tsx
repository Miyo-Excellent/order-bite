import { RecipeModel } from '@models/recipe.model.tsx';

export interface RecipesState {
  breakfast: RecipeModel[];
  dinners: RecipeModel[];
  desserts: RecipeModel[];
}

export const recipesInitialState: RecipesState = {
  breakfast: [],
  dinners: [],
  desserts: []
};
