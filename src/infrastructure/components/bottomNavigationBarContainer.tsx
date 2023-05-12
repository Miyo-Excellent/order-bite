import styled from 'styled-components';

export interface BottomNavigationBarContainerProps {}

export const BottomNavigationBarContainer = styled.nav<BottomNavigationBarContainerProps>`
  width: calc(100% - 10px);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
