import styled from '@emotion/styled';
import { AchievementConfig } from '../types';
import tinyColor from 'tinycolor2';

const borderWidth = '5px';

export const Container = styled.li<{
  rating: AchievementConfig['rating'];
}>`
  display: flex;
  align-items: flex-start;
  width: 300px;

  margin: auto;
  max-width: 22em;
  flex: 0 0 30%;

  background: #444;

  position: relative;
  padding: 10px;
  box-sizing: border-box;

  position: relative;
  padding: 20px 30px;
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

// TODO: Might be worth considering a background SVG when the graphical improvement becomes a factor.

export const Link = styled.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: #ddd;
`;
