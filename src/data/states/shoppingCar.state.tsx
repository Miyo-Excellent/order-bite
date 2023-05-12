import { RecipeModel } from '@models/recipe.model.tsx';

export interface ShoppingCarState {
  total: number;
  recipes: RecipeModel[];
}

export const shoppingCarInitialState: ShoppingCarState = {
  total: 0,
  recipes: []
};
