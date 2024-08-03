import styled from '@emotion/styled';
import { HEIGHT as ICON_HEIGHT } from '../common/Icon.style';
import { RatingsBorder } from '../common/RatingBorder.style';
import { getThemeProperty } from '../../utils/get-theme-property';
import { NavLink } from 'react-router-dom';

const VERTICAL_PADDING = 20;
const HEIGHT = (VERTICAL_PADDING * 2) + ICON_HEIGHT +100;

export const Container = styled(RatingsBorder)`
  height: ${HEIGHT}px;
`;

export const Link = styled(NavLink)`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: #ddd;
  height: 100%;
`;

export const Overview = styled.div`
  position: relative;
  width: 100%;
`;

export const OverviewChild = styled.div`
`;

export const Header = styled.div`
  display: flex;
`;

export const Description = styled.h4`
`;

export const Body = styled(OverviewChild)`
  position: absolute;
  top: ${ICON_HEIGHT}px;
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
