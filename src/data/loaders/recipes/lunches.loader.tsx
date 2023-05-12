import { RecipeModel } from '@models/recipe.model.tsx';
import { edamamApiService } from '@states/di.state';

export interface LunchesLoaderOptions {}

export const lunchesLoader = async ({}: LunchesLoaderOptions = {}): Promise<
  RecipeModel[]
> => {
  const { getLunches } = edamamApiService;

  return getLunches();
};
