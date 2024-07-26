import styled from '@emotion/styled';
import { RatingsBorder } from '../common/RatingBorder.style';

export const Container = styled(RatingsBorder.withComponent('li'))`
  display: flex;
  align-items: flex-start;
  width: 1%;
  min-width: 300px;
  flex-grow: 1;
`;

export const Link = styled.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: #ddd;
`;
