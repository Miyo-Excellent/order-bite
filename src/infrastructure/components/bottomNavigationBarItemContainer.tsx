import styled from 'styled-components';

export interface BottomNavigationBarItemContainerProps {
  background?: string;
}

export const BottomNavigationBarItemContainer = styled.li<BottomNavigationBarItemContainerProps>`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: ${({ background = 'transparent' }) => background};
`;
