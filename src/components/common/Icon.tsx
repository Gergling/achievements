import CodeBrackets from '../../assets/code-brackets.svg';
import Dumbbell from '../../assets/dumbbell.svg';
import HammerSpanner from '../../assets/hammer-spanner.svg';
import { pillars } from '../../literals/pillars';

import { AchievementConfig } from "../../types";
import { Container, Unknown } from './Icon.style';

type IconProps = {
  pillar: AchievementConfig['pillar'];
  interest: AchievementConfig['interest'];
};

const IconByPillar = ({
  pillar,
  interest,
}: IconProps) => {
  switch (`${pillar}-${interest}`) {
    case 'health-lifting':
      return <Dumbbell />;
  }
  switch (interest) {
    case 'coding':
      return <CodeBrackets />;
    case 'crafts':
      return <HammerSpanner />;
  }
  return <Unknown>?</Unknown>;
}

export const Icon = ({
  pillar,
  interest,
}: IconProps) => {
  const pillarColour = pillars[pillar].colour;
  return <Container color={pillarColour}>
    <IconByPillar
      pillar={pillar}
      interest={interest}
    />
  </Container>
};
