import { type RecipeModel } from '@models/recipe.model.tsx';

export interface EdamamApiServiceData {
  readonly appId: string;
  readonly appKey: string;
  readonly baseUrl: string;

  getRecipes(): Promise<RecipeModel[]>;

  getBreakfasts(): Promise<RecipeModel[]>;

  getIngredients(query?: string): Promise<string[]>;

  getDinners(): Promise<RecipeModel[]>;

  getDesserts(): Promise<RecipeModel[]>;

  request(url: string): Promise<RecipeModel[]>;

  parseRecipe(hit: any): RecipeModel;

  parseRecipes(hits: any[]): RecipeModel[];
}
