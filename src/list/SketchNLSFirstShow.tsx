import { AchievementConfig } from "../types";

const Component = () => <>
  This was the first show with Next Level Sketch, and the only show we performed as this group before the pandemic hit.
</>;

const data: AchievementConfig = {
  name: 'sketch-nls-first-show',
  pillar: 'artistic',
  interest: 'performance',
  rating: 'silver',
  date: new Date('2020-01-28'),
  description: 'First Next Level Sketch Show',
  component: <Component />,
};

export default data;
