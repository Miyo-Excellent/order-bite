import axios from 'axios';
import { RecipeModel } from '@models/recipe.model.tsx';
import { EdamamApiServiceData } from '@dataServices/edamamApi.serviceData';

export interface EdamamApiServiceOptions {
  readonly appId: string;
  readonly appKey: string;
  readonly baseUrl?: string;
}

export class EdamamApiService implements EdamamApiServiceData {
  private readonly appId: string;
  private readonly appKey: string;
  private readonly baseUrl?: string;

  constructor({
    appId,
    appKey,
    baseUrl = 'https://api.edamam.com/search'
  }: EdamamApiServiceOptions) {
    this.appId = appId;
    this.appKey = appKey;
    this.baseUrl = baseUrl;
  }

  getRecipes = async ({ query = 'recipes' } = {}): Promise<RecipeModel[]> => {
    const url = `${this.baseUrl}?q=${query}&app_id=${this.appId}&app_key=${this.appKey}`;
    return await this.request(url);
  };

  getCocktails = async (): Promise<RecipeModel[]> => {
    return this.getRecipes({ query: 'cocktail' });
  };

  getDrinks = async (): Promise<RecipeModel[]> => {
    return this.getRecipes({ query: 'drink' });
  };

  getLunches = async (): Promise<RecipeModel[]> => {
    return this.getRecipes({ query: 'lunch' });
  };

  getBreakfasts = async (): Promise<RecipeModel[]> => {
    return this.getRecipes({ query: 'breakfast' });
  };

  getDinners = async (): Promise<RecipeModel[]> => {
    return this.getRecipes({ query: 'dinner' });
  };

  getDesserts = async (): Promise<RecipeModel[]> => {
    return this.getRecipes({ query: 'dessert' });
  };

  private request = async (url: string): Promise<RecipeModel[]> => {
    const response = await axios.get(url);
    const hits = response.data.hits;
    return this.parseRecipes(hits);
  };

  private parseRecipe(hit: any): RecipeModel {
    const recipe = hit.recipe;
    return {
      id: recipe.uri.split('#')[1],
      name: recipe.label,
      image: recipe.image,
      description: recipe.source,
      price: Math.floor(Math.random() * 100)
    };
  }

  private parseRecipes(hits: any[]): RecipeModel[] {
    return hits.map((hit) => this.parseRecipe(hit));
  }
}
