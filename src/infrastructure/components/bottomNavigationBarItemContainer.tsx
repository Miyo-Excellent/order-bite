import styled from 'styled-components';
import { Bottom } from '@components/buttom';

export interface BottomNavigationBarItemContainerProps {
  background?: string;
}

export const BottomNavigationBarItemContainer = styled(Bottom)<BottomNavigationBarItemContainerProps>`
  width: auto;
  height: 70px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  flex: 1;
  background: ${({ background = 'skyblue' }) => background};
  margin: 0 10px 0 0;
  
  &:last-child {
    margin: 0;
  }
`;
