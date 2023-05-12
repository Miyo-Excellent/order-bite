import styled from 'styled-components';

export interface BottomNavigationBarSectionProps {}
export const BottomNavigationBarSection = styled.ul<BottomNavigationBarSectionProps>`
  width: calc(100% - 10px);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 10px;
`