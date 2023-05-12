import { EdamamApiRepository } from '@repositories/edamamApi.repository.tsx';
import { EdamamApiService } from '@services/edamamApi.service.tsx';
import { RecipeModel } from '@models/recipe.model.tsx';

export const breakfastsLoader = async ({}): Promise<RecipeModel[]> => {
  const service = new EdamamApiService();
  const { getBreakfasts } = new EdamamApiRepository(service);

  return getBreakfasts();
};
