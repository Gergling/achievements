import styled from '@emotion/styled';
import { HEIGHT as ICON_HEIGHT } from './Icon.style';
import { RatingsBorder } from './Dashboard.style';

const VERTICAL_PADDING = 20;
const HEIGHT = (VERTICAL_PADDING * 2) + ICON_HEIGHT;

export const Container = styled(RatingsBorder)`
  height: ${HEIGHT}px;
`;

export const Link = styled.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: #ddd;
`;
