import { UpdateRecipePayload } from '@payloads/recipe/updateRecipe.payload.tsx';
import { Action } from '@dataTypes/action.type.tsx';
import { RecipesState } from '@states/recipes.state.tsx';
import { RecipesTypes } from '@data/types/recipes.types.tsx';
import { RecipeModel } from '@models/recipe.model.tsx';
import { HandleAction } from '@dataTypes/handleAction.type.tsx';

export const updateRecipeAction: HandleAction<RecipesState> = (
  state: RecipesState,
  action: Action<RecipesTypes, UpdateRecipePayload>
): void => {
  state[action.payload.to] = state[action.payload.to].map((item: RecipeModel) => {
    if (action.payload.id === item.id) {
      return { ...item, ...action.payload.data };
    }

    return item;
  });
};
