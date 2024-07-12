import CodeBrackets from '../assets/code-brackets.svg';
import Dumbbell from '../assets/dumbbell.svg';

import { AchievementConfig } from "../types";
import { colour } from "../utils/category-colour";
import { Container, Unknown } from './Icon.style';

type IconProps = {
  category: AchievementConfig['category'];
  subcategory: AchievementConfig['subcategory'];
};

const IconByCategory = ({
  category,
  subcategory,
}: IconProps) => {
  switch (`${category}-${subcategory}`) {
    case 'artistic-coding':
      return <CodeBrackets />;
    case 'health-physical':
      return <Dumbbell />;
    default:
      return <Unknown>?</Unknown>;
  }
}

export const Icon = ({
  category,
  subcategory,
}: IconProps) => {
  const categoryColour = colour[category];
  return <Container color={categoryColour}>
    <IconByCategory
      category={category}
      subcategory={subcategory}
    />
  </Container>
};
