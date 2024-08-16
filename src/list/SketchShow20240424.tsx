import { AchievementConfig } from "../types";

const Component = () => <>
  This was a sketch show.
</>;

const data: AchievementConfig = {
  name: 'sketch-show-20240424',
  pillar: 'artistic',
  interest: 'performance',
  rating: 'bronze',
  date: new Date('2024-04-24'),
  description: 'Sketch Show 24th April 2024', 
  component: <Component />,
};

export default data;
