import { RecipeModel } from '@models/recipe.model';
import { AppetizersViewContainer } from '@components/appetizersViewContainer';
import { AppetizersViewTitle } from '@components/appetizersViewTitle';
import { AppetizersViewSubTitle } from '@components/appetizersViewSubTitle';
import { AppetizersViewFoodsContainer } from '@components/appetizersViewFoodsContainer';
import { AppetizersViewFoodHeader } from '@components/appetizersViewFoodHeader';
import { AppetizersViewFoodHeaderImage } from '@components/appetizersViewFoodHeaderImage';
import { AppetizersViewFoodContainer } from '@components/appetizersViewFoodContainer';
import { AppetizersViewFoodPrice } from '@components/appetizersViewFoodPrice';
import { AppetizersViewFoodDescription } from '@components/appetizersViewFoodDescription';
import { AppetizersViewFoodName } from '@components/appetizersViewFoodName';
import { AppetizersViewFoodInfoContainer } from '@components/appetizersViewFoodInfoContainer';
import { EventHandler } from 'react';

export interface AppetizersViewProps {
  foods: RecipeModel[];
  onClickPrice: (
    event: EventHandler<'click'>,
    food: RecipeModel
  ) => Promise<void>;
}

export const AppetizersView = ({
  foods = [],
  onClickPrice
}: AppetizersViewProps) => (
  <AppetizersViewContainer>
    <AppetizersViewTitle>Appetizers View</AppetizersViewTitle>
    <AppetizersViewSubTitle>
      Lorem ipsum dolor sit amet, consectetur adip.
    </AppetizersViewSubTitle>

    <AppetizersViewFoodsContainer>
      {foods.map((food) => (
        <AppetizersViewFoodContainer key={`appetizer-food-${food.id}`}>
          <AppetizersViewFoodHeader>
            <AppetizersViewFoodHeaderImage
              src={food.image}
              alt={`Image of ${food.name}`}
            />
          </AppetizersViewFoodHeader>
          <AppetizersViewFoodInfoContainer>
            <AppetizersViewFoodName>{food.name}</AppetizersViewFoodName>
            <AppetizersViewFoodDescription>
              {food.description}
            </AppetizersViewFoodDescription>
            <AppetizersViewFoodPrice
              onClick={async (event) => onClickPrice(event, food)}
            >{`$${food.price}`}</AppetizersViewFoodPrice>
          </AppetizersViewFoodInfoContainer>
        </AppetizersViewFoodContainer>
      ))}
    </AppetizersViewFoodsContainer>
  </AppetizersViewContainer>
);
