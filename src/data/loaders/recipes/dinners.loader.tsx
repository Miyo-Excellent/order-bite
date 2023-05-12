import { RecipeModel } from '@models/recipe.model.tsx';
import { edamamApiService } from '@states/di.state';

export interface DinnersLoaderOptions {}

export const dinnersLoader = async ({}: DinnersLoaderOptions = {}): Promise<
  RecipeModel[]
> => {
  const { getDinners } = edamamApiService;

  return getDinners();
};
