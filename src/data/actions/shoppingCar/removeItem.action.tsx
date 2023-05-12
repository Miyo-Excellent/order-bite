import { Action } from '@dataTypes/action.type.tsx';
import { HandleAction } from '@dataTypes/handleAction.type.tsx';
import { ShoppingCarState } from '@states/shoppingCar.state.tsx';
import { ShoppingCarTypes } from '@data/types/shoppingCar.types.tsx';
import { AddShoppingCarPayload } from '@payloads/shoppingCar/addShoppingCar.payload.tsx';
import { RecipeModel } from '@models/recipe.model.tsx';

export const removeItemAction: HandleAction<ShoppingCarState> = (
  state: ShoppingCarState,
  action: Action<ShoppingCarTypes, AddShoppingCarPayload>
): void => {
  state.recipes = state.recipes.filter(
    (item: RecipeModel) => item.id === action.payload.id
  );
};
