import styled from 'styled-components';

export interface BottomNavigationBarContainerProps {}

export const BottomNavigationBarContainer = styled.nav<BottomNavigationBarContainerProps>`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.2);
`;
