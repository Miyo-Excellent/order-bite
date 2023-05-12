import styled from 'styled-components';

export interface AppetizersViewFoodContainerProps {}

export const AppetizersViewFoodContainer = styled.article<AppetizersViewFoodContainerProps>`
  width: 300px;
  height: 300px;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 1);
`;
