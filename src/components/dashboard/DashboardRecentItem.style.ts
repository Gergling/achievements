import styled from '@emotion/styled';
import { HEIGHT as ICON_HEIGHT } from '../common/Icon.style';
import { RatingsBorder } from '../common/RatingBorder.style';
import { getThemeProperty } from '../../utils/get-theme-property';
import { NavLink } from 'react-router-dom';

const VERTICAL_PADDING = 20;
const HEIGHT = (VERTICAL_PADDING * 2) + ICON_HEIGHT;

export const Container = styled(RatingsBorder.withComponent('li'))`
  height: ${HEIGHT}px;
`;

export const Link = styled(NavLink)`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: #ddd;
`;

export const Overview = styled.div`
  position: relative;
  width: 100%;
`;

export const OverviewChild = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

export const Header = styled(OverviewChild)`
  display: flex;
  height: 20px;
`;

export const Body = styled(OverviewChild)`
  top: 20px;
  bottom: 0;
  overflow: hidden;
`;

export const BodyFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: linear-gradient(180deg, transparent, ${getThemeProperty('app.background')});
`;
