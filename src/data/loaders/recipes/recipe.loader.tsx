import { dessertsLoader } from '@loaders/recipes/desserts.loader.tsx';
import { breakfastsLoader } from '@loaders/recipes/breakfasts.loader.tsx';
import { recipesLoader } from '@data/loaders/recipes/recipes.loader.tsx';
import { dinnersLoader } from '@loaders/recipes/dinners.loader.tsx';
import { ingredientsLoader } from '@loaders/recipes/ingredients.loader.tsx';
import { RecipeModel } from '@models/recipe.model.tsx';

export interface RecipeLoaderData {
  desserts: RecipeModel[];
  breakfasts: RecipeModel[];
  recipes: RecipeModel[];
  dinners: RecipeModel[];
  ingredients: string[];
}

export const recipeLoader = async (props: any): Promise<RecipeLoaderData> => {
  const [desserts, breakfasts, recipes, dinners, ingredients] =
    await Promise.all([
      dessertsLoader(props),
      breakfastsLoader(props),
      recipesLoader(props),
      dinnersLoader(props),
      ingredientsLoader(props)
    ]);

  return { desserts, breakfasts, recipes, dinners, ingredients };
};
