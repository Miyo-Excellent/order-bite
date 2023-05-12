import { EdamamApiRepository } from '@repositories/edamamApi.repository.tsx';
import { EdamamApiService } from '@services/edamamApi.service.tsx';

export const ingredientsLoader = async ({}): Promise<string[]> => {
  const service = new EdamamApiService();
  const { getIngredients } = new EdamamApiRepository(service);

  return getIngredients();
};
