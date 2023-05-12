import { RecipeModel } from '@models/recipe.model';
import { dessertsLoader } from '@loaders/recipes/desserts.loader';
import { breakfastsLoader } from '@loaders/recipes/breakfasts.loader';
import { recipesLoader } from '@loaders/recipes/recipes.loader';
import { dinnersLoader } from '@loaders/recipes/dinners.loader';

export interface MainLoaderData {
  recipes: RecipeLoaderData;
}

export interface RecipeLoaderData {
  desserts: RecipeModel[];
  breakfasts: RecipeModel[];
  recipes: RecipeModel[];
  dinners: RecipeModel[];
}

export interface MainLoaderOptions {}

export const mainLoader = async (
  props: MainLoaderOptions = {}
): Promise<MainLoaderData> => {
  const desserts = await dessertsLoader(props);
  const breakfasts = await breakfastsLoader(props);
  const recipes = await recipesLoader(props);
  const dinners = await dinnersLoader(props);

  return {
    recipes: {
      desserts,
      breakfasts,
      recipes,
      dinners,
    }
  } as MainLoaderData;
};
