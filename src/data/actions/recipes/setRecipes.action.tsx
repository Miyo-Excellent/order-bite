import { SetRecipesPayload } from '@payloads/recipe/setRecipes.payload.tsx';
import { Action } from '@dataTypes/action.type.tsx';
import { RecipesState } from '@states/recipes.state.tsx';
import { RecipesTypes } from '@data/types/recipes.types.tsx';
import { HandleAction } from '@dataTypes/handleAction.type.tsx';

export const setRecipesAction: HandleAction<RecipesState> = (
  state: RecipesState,
  action: Action<RecipesTypes, SetRecipesPayload>
): void => {
  state[action.payload.to] = action.payload.data;
};
