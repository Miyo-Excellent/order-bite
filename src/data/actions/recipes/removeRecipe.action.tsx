import { Action } from '@dataTypes/action.type.tsx';
import { HandleAction } from '@dataTypes/handleAction.type.tsx';
import { RecipesTypes } from '@data/types/recipes.types.tsx';
import { RemoveRecipePayload } from '@payloads/recipe/removeRecipe.payload.tsx';
import { RecipeModel } from '@models/recipe.model.tsx';
import { RecipesState } from '@states/recipes.state.tsx';

export const removeRecipeAction: HandleAction<RecipesState> = (
  state: RecipesState,
  action: Action<RecipesTypes, RemoveRecipePayload>
): void => {
  state[action.payload.to] = state[action.payload.to].filter(
    (item: RecipeModel) => item.id === action.payload.id
  );
};
