import { RecipeModel } from '@models/recipe.model.tsx';
import { edamamApiService } from '@states/di.state';

export interface BreakfastsLoaderOptions {}

export const breakfastsLoader = async ({}: BreakfastsLoaderOptions = {}): Promise<
  RecipeModel[]
> => {
  const { getBreakfasts } = edamamApiService;

  return getBreakfasts();
};
