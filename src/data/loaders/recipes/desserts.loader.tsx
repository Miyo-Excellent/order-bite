import { RecipeModel } from '@models/recipe.model.tsx';
import { edamamApiService } from '@states/di.state';

export interface DessertsLoaderOptions {}

export const dessertsLoader = async ({}: DessertsLoaderOptions = {}): Promise<
  RecipeModel[]
> => {
  const { getDesserts } = edamamApiService;
  return getDesserts();
};
