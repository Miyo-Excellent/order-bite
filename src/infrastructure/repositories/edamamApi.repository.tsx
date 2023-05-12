import { RecipeModel } from '@models/recipe.model.tsx';
import { EdamamApiService } from '@services/edamamApi.service.tsx';

export class EdamamApiRepository {
  constructor(private readonly service: EdamamApiService) {}

  async getRecipes(): Promise<RecipeModel[]> {
    return await this.service.getRecipes();
  }

  async getBreakfasts(): Promise<RecipeModel[]> {
    return await this.service.getBreakfasts();
  }

  async getIngredients(query?: string): Promise<string[]> {
    return this.service.getIngredients(query);
  }

  async getDinners(): Promise<RecipeModel[]> {
    return this.service.getDinners();
  }

  async getDesserts(): Promise<RecipeModel[]> {
    return this.service.getDinners();
  }
}
