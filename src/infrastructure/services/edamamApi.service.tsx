import axios from 'axios';
import { RecipeModel } from '@models/recipe.model.tsx';

export class EdamamApiService {
  private readonly appId: string;
  private readonly appKey: string;
  private readonly baseUrl: string;

  constructor() {
    this.appId = 'your_app_id';
    this.appKey = 'your_app_key';
    this.baseUrl = 'https://api.edamam.com/search';
  }

  async getRecipes(): Promise<RecipeModel[]> {
    const url = `${this.baseUrl}?q=recipes&app_id=${this.appId}&app_key=${this.appKey}`;
    return await this.request(url);
  }

  async getBreakfasts(): Promise<RecipeModel[]> {
    const url = `${this.baseUrl}?q=breakfast&app_id=${this.appId}&app_key=${this.appKey}`;
    return await this.request(url);
  }

  async getIngredients(query?: string): Promise<string[]> {
    const url = `https://api.edamam.com/auto-complete?q=${
      query ? `?q=${query}&` : '&'
    }limit=10&app_id=${this.appId}&app_key=${this.appKey}`;
    const response = await axios.get(url);
    return response.data;
  }

  async getDinners(): Promise<RecipeModel[]> {
    const url = `${this.baseUrl}?q=dinner&app_id=${this.appId}&app_key=${this.appKey}`;
    return await this.request(url);
  }

  async getDesserts(): Promise<RecipeModel[]> {
    const url = `${this.baseUrl}?q=dessert&app_id=${this.appId}&app_key=${this.appKey}`;
    return await this.request(url);
  }

  private async request(url: string): Promise<RecipeModel[]> {
    const response = await axios.get(url);
    const hits = response.data.hits;
    return this.parseRecipes(hits);
  }

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
