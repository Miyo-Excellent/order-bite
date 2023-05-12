import { type RecipeModel } from '@models/recipe.model.tsx';
import { EdamamApiServiceData } from '@dataServices/edamamApi.serviceData.tsx';

export interface EdamamApiRepositoryData {
  readonly service: EdamamApiServiceData;

  getRecipes(): Promise<RecipeModel[]>;

  getBreakfasts(): Promise<RecipeModel[]>;

  getIngredients(query?: string): Promise<string[]>;

  getDinners(): Promise<RecipeModel[]>;

  getDesserts(): Promise<RecipeModel[]>;
}
