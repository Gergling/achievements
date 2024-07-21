import styled from '@emotion/styled';
import { RatingsBorder } from '../common/RatingBorder.style';

export const Container = styled(RatingsBorder.withComponent('li'))`
  display: flex;
  align-items: flex-start;

  flex: 0 0 30%;
  width: 300px;
`;

export const Link = styled.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: #ddd;
`;
