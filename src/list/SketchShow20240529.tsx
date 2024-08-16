import { AchievementConfig } from "../types";

const Component = () => <>
  Standard bronze for performing a sketch show.
</>;

const data: AchievementConfig = {
  name: 'sketch-show-20240529',
  pillar: 'artistic',
  interest: 'performance',
  rating: 'bronze',
  date: new Date('2024-05-29'),
  description: 'Sketch Show 25th May 2024',
  component: <Component />,
};

export default data;
