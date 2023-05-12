import { RecipeModel } from '@models/recipe.model.tsx';
import { edamamApiService } from '@states/di.state';

export interface CocktailsLoaderOptions {}

export const cocktailsLoader = async ({}: CocktailsLoaderOptions = {}): Promise<
  RecipeModel[]
> => {
  const { getCocktails } = edamamApiService;

  return getCocktails();
};
