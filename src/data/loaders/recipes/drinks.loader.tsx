import { RecipeModel } from '@models/recipe.model.tsx';
import { edamamApiService } from '@states/di.state';

export interface DrinksLoaderOptions {}

export const drinksLoader = async ({}: DrinksLoaderOptions = {}): Promise<
  RecipeModel[]
> => {
  const { getDrinks } = edamamApiService;

  return getDrinks();
};
