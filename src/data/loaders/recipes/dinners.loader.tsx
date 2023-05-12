import { EdamamApiRepository } from '@repositories/edamamApi.repository.tsx';
import { EdamamApiService } from '@services/edamamApi.service.tsx';
import { RecipeModel } from '@models/recipe.model.tsx';

export const dinnersLoader = async ({}): Promise<RecipeModel[]> => {
  const service = new EdamamApiService();
  const { getDinners } = new EdamamApiRepository(service);

  return getDinners();
};
