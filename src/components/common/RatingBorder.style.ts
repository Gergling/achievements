import styled from '@emotion/styled';
import { AchievementConfig } from '../../types';
import tinyColor from 'tinycolor2';
import { getThemeProperty } from '../../utils/get-theme-property';

const borderWidth = '5px';

const VERTICAL_PADDING = 20;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 10px;
  flex-wrap: wrap;
`;

// TODO: Might be worth considering a background SVG when the graphical improvement becomes a factor.
export const RatingsBorder = styled.div<{
  rating: AchievementConfig['rating'];
}>`
  margin: auto;

  background: ${getThemeProperty('app.background')};

  position: relative;
  box-sizing: border-box;

  padding: ${VERTICAL_PADDING}px 30px;
  margin: ${borderWidth};

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: ${borderWidth}; /* control the border thickness */

    ${({ rating }) => {
      const colour = ({
        gold: 'gold',
        silver: 'silver',
        bronze: '#b07000',
      }[rating]);
      const dark = tinyColor(colour).darken(30).toRgbString();
      const light = tinyColor(colour).lighten(30).toRgbString();
      return {
        background: `linear-gradient(
          135deg, 
          ${light}, 
          ${dark}
        )`
      }
    }}

    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;
