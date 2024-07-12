import styled from '@emotion/styled';
import { RatingsBorder } from './Dashboard.style';

export const RatingBorder = styled(RatingsBorder.withComponent('div'))`
  width: 150px;
  height: 150px;
  padding: 25px;

  flex-basis: auto;
  &:before {
    border-radius: 75px;
  }
`;
