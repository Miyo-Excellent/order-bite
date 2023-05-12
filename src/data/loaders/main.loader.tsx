import {
  recipeLoader,
  RecipeLoaderData
} from '@loaders/recipes/recipe.loader.tsx';

export interface MainLoaderData {
  recipes: RecipeLoaderData;
}

export const mainLoader = async (props: any): Promise<MainLoaderData> => {
  const recipes: RecipeLoaderData = await recipeLoader(props);

  return { recipes };
};
