import styled from '@emotion/styled';
import { AchievementConfig } from '../types';

const borderWidth = '5px';

export const Container = styled.li<{
  rating: AchievementConfig['rating'];
}>`
  display: flex;
  align-items: flex-start;
  margin: auto;
  max-width: 22em;
  flex: 0 0 30%;

  position: relative;
  padding: 10px;
  box-sizing: border-box;

  // $border: 5px;
  background: #444;
  background-clip: padding-box; /* !importanté */
  border: solid ${borderWidth} transparent; /* !importanté */
  border-radius: 1em;

  width: 300px;

  $gold: gold;
  $silver: silver;
  $bronze: #b07000;

  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -${borderWidth}; /* !importanté */
    border-radius: inherit; /* !importanté */

    ${({ rating }) => {
      const colour = ({
        gold: 'gold',
        silver: 'silver',
        bronze: '#b07000',
      }[rating]);
      return {
        '--color': colour,
        background: `linear-gradient(
          135deg, 
          hsl(from var(--colour) h s calc(${colour} + 30%)), 
          hsl(from var(--colour) h s calc(${colour} - 30%))
        )`
      }
    }}
  }
`;

export const Link = styled.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: #ddd;
`;
