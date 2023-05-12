import { SetRecipesPayload } from '@payloads/recipe/setRecipes.payload.tsx';
import { Action } from '@dataTypes/action.type.tsx';
import { RecipesTypes } from '@data/types/recipes.types.tsx';
import { HandleAction } from '@dataTypes/handleAction.type.tsx';
import { ShoppingCarState } from '@states/shoppingCar.state.tsx';

export const setItemsAction: HandleAction<ShoppingCarState> = (
  state: ShoppingCarState,
  action: Action<RecipesTypes, SetRecipesPayload>
): void => {
  state.recipes = action.payload.data;
};
