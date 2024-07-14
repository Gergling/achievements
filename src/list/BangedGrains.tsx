import { AchievementConfig } from "../types";

const Component = () => <>
  A small project banging circles together.
</>;

const data: AchievementConfig = {
  name: 'banged-grains',
  pillar: 'artistic',
  interest: 'coding',
  rating: 'bronze',
  date: new Date('2024-04-19'),
  description: 'Banged Grains', 
  component: <Component />,
};

export default data;
