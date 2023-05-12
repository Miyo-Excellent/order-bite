import { RecipeModel } from '@models/recipe.model.tsx';
import { edamamApiService } from '@states/di.state';

export interface RecipesLoaderOptions {}

export const recipesLoader = async ({}: RecipesLoaderOptions = {}): Promise<
  RecipeModel[]
> => {
  const { getRecipes } = edamamApiService;

  return getRecipes();
};
