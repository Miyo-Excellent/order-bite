import { type RecipeModel } from '@models/recipe.model.tsx';

export interface EdamamApiServiceData {
  readonly appId: string;
  readonly appKey: string;
  readonly baseUrl?: string;

  getRecipes(params?: { query?: string }): Promise<RecipeModel[]>;
  getCocktails(): Promise<RecipeModel[]>;
  getDrinks(): Promise<RecipeModel[]>;
  getLunches(): Promise<RecipeModel[]>;

  getBreakfasts(): Promise<RecipeModel[]>;

  getDinners(): Promise<RecipeModel[]>;

  getDesserts(): Promise<RecipeModel[]>;

  request(url: string): Promise<RecipeModel[]>;

  parseRecipe(hit: any): RecipeModel;

  parseRecipes(hits: any[]): RecipeModel[];
}
