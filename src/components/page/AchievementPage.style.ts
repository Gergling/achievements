import styled from '@emotion/styled';
import { RatingsBorder } from '../common/RatingBorder.style';

export const RatingBorder = styled(RatingsBorder)`
  width: 150px;
  height: 150px;
  padding: 25px;

  flex-basis: auto;
  &:before {
    border-radius: 75px;
  }
`;
