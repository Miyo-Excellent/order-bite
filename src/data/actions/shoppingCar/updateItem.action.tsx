import { Action } from '@dataTypes/action.type.tsx';
import { HandleAction } from '@dataTypes/handleAction.type.tsx';
import { ShoppingCarState } from '@states/shoppingCar.state.tsx';
import { UpdateShoppingCarPayload } from '@payloads/shoppingCar/updateShoppingCar.payload.tsx';
import { ShoppingCarTypes } from '@actionTypes/shoppingCar.types.tsx';
import { RecipeModel } from '@models/recipe.model.tsx';

export const updateItemAction: HandleAction<ShoppingCarState> = (
  state: ShoppingCarState,
  action: Action<ShoppingCarTypes, UpdateShoppingCarPayload>
): void => {
  state.recipes = state.recipes.map((item: RecipeModel) => {
    if (action.payload.id === item.id) {
      return { ...item, ...action.payload.data };
    }

    return item;
  });
};
