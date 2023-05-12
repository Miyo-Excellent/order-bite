import { RecipeModel } from '@models/recipe.model.tsx';
import { EdamamApiService } from '@services/edamamApi.service.tsx';
import { EdamamApiRepositoryData } from '@dataRepositories/edamamApi.repositoryData';

export class EdamamApiRepository implements EdamamApiRepositoryData {
  constructor(private readonly service: EdamamApiService) {
  }

  async getRecipes(params): Promise<RecipeModel[]> {
    return await this.service.getRecipes(params);
  }

  async getCocktails(): Promise<RecipeModel[]> {
    return await this.service.getCocktails();
  }


  async getDrinks(): Promise<RecipeModel[]> {
    return await this.service.getDrinks();
  }


  async getLunches(): Promise<RecipeModel[]> {
    return await this.service.getLunches();
  }

  async getBreakfasts(): Promise<RecipeModel[]> {
    return await this.service.getBreakfasts();
  }

  async getDinners(): Promise<RecipeModel[]> {
    return this.service.getDinners();
  }

  async getDesserts(): Promise<RecipeModel[]> {
    return this.service.getDinners();
  }
}
