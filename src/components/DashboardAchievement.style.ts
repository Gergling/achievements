import styled from '@emotion/styled';
import { RatingsBorder } from './Dashboard.style';

export const Container = styled(RatingsBorder)`
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
