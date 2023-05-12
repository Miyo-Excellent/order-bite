import { Action } from '@dataTypes/action.type.tsx';
import { HandleAction } from '@dataTypes/handleAction.type.tsx';
import { RecipesState } from '@states/recipes.state.tsx';
import { RecipesTypes } from '@actionTypes/recipes.types.tsx';
import { AddRecipePayload } from '@payloads/recipe/addRecipe.payload.tsx';

export const addRecipeAction: HandleAction<RecipesState> = (
  state: RecipesState,
  action: Action<RecipesTypes, AddRecipePayload>
): void => {
  state[action.payload.to].push(action.payload.data);
};
