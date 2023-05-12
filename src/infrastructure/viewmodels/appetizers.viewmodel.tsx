import { AppetizersView } from '@views/appetizers.view';
import { useDispatch, useSelector } from 'react-redux';
import { RecipeModel } from '@models/recipe.model';
import { EventHandler } from 'react';
import { addItem } from '@slices/shoppingCar.slice';

export interface AppetizersViewModelProps {}

export const AppetizersViewmodel = ({}: AppetizersViewModelProps) => {
  const dispatch = useDispatch();

  const breakfasts: RecipeModel[] =
    useSelector((state) => state.recipes.breakfasts) || [];

  const onClickPrice = async (
    event: EventHandler<'click'>,
    food: RecipeModel
  ): Promise<void> => {
    dispatch(addItem(food as any));
  };

  return <AppetizersView foods={breakfasts} onClickPrice={onClickPrice} />;
};
