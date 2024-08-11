import { pillars } from '../../../literals/pillars';

import { StyledIconContainer } from './Icon.style';
import { IconByInterest } from './IconByInterest';
import { IconProps } from './types';

export const Icon = ({
  pillar,
  interest,
  colourOverride,
}: IconProps) => {
  const colour = colourOverride || pillars[pillar].colour;
  return <StyledIconContainer color={colour}>
    <IconByInterest
      interest={interest}
    />
  </StyledIconContainer>
};
