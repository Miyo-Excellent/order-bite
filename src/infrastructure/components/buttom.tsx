import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface BottomProps {
}

export const Bottom = styled(Link)<BottomProps>`
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: skyblue;
  text-decoration: none;
  color: rgba(0, 0, 0, 1);
  font-weight: 600;
  font-size: 1.4rem;
  margin: 10px auto;
  border-radius: 5px;
  transition: all linear 100ms;

  &:active {
    transform: scale(0.9);
  }
`;