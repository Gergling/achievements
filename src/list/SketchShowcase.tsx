import { AchievementConfig } from "../types";

const Component = () => <>
  This was my first time visiting sketch. I'd done plenty of stand-up and improv by this point, so I wasn't new to performing.
</>;

const data: AchievementConfig = {
  name: 'sketch-course-showcase',
  pillar: 'artistic',
  interest: 'performance',
  rating: 'silver',
  date: new Date('2019-04-01'),
  description: 'Sketch Course Showcase', 
  component: <Component />,
};

export default data;
