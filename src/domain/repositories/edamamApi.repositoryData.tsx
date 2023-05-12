import { type RecipeModel } from '@models/recipe.model.tsx';
import { EdamamApiServiceData } from '@dataServices/edamamApi.serviceData.tsx';

export interface EdamamApiRepositoryData {
  readonly service: EdamamApiServiceData;

  getRecipes(params?: { query?: string }): Promise<RecipeModel[]>;

  getCocktails(): Promise<RecipeModel[]>;
  getDrinks(): Promise<RecipeModel[]>;
  getLunches(): Promise<RecipeModel[]>;

  getBreakfasts(): Promise<RecipeModel[]>;

  getDinners(): Promise<RecipeModel[]>;

  getDesserts(): Promise<RecipeModel[]>;
}
