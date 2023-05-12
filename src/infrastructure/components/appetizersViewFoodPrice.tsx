import styled from 'styled-components';

export interface AppetizersViewFoodPriceProps {}

export const AppetizersViewFoodPrice = styled.button<AppetizersViewFoodPriceProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 0 0 5px 5px;
  border: 1px solid rgba(0, 0, 0, 1);
  transition: all linear 100ms;
  background: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 1);
    color: rgba(0, 0, 0, 1);
    background: rgba(255, 255, 255, 1);
  }

  &:active {
    transform: scale(0.9);
  }
`;
