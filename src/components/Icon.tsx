import CodeBrackets from '../assets/code-brackets.svg';
import Dumbbell from '../assets/dumbbell.svg';
import HammerSpanner from '../assets/hammer-spanner.svg';

import { AchievementConfig } from "../types";
import { colour } from "../utils/pillar-colour";
import { Container, Unknown } from './Icon.style';

type IconProps = {
  pillar: AchievementConfig['pillar'];
  hobby: AchievementConfig['hobby'];
};

const IconBypillar = ({
  pillar,
  hobby,
}: IconProps) => {
  switch (`${pillar}-${hobby}`) {
    case 'health-physical':
      return <Dumbbell />;
  }
  switch (hobby) {
    case 'coding':
      return <CodeBrackets />;
    case 'crafts':
      return <HammerSpanner />;
  }
  return <Unknown>?</Unknown>;
}

export const Icon = ({
  pillar,
  hobby,
}: IconProps) => {
  const pillarColour = colour[pillar];
  return <Container color={pillarColour}>
    <IconBypillar
      pillar={pillar}
      hobby={hobby}
    />
  </Container>
};
