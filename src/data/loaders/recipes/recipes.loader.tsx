import { EdamamApiRepository } from '@repositories/edamamApi.repository.tsx';
import { EdamamApiService } from '@services/edamamApi.service.tsx';
import { RecipeModel } from '@models/recipe.model.tsx';

export const recipesLoader = async ({}): Promise<RecipeModel[]> => {
  const service = new EdamamApiService();
  const { getRecipes } = new EdamamApiRepository(service);

  return getRecipes();
};
