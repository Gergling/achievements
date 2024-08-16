import { AchievementConfig } from "../types";

const Component = () => <>
  This was my first stand-up show. I'd done a stand-up course and this was the showcase at the end of it. I felt like I did pretty well. The gold is justified by the fact that this was the first time back on stage since my late teens, more than a decade later.

  The reception was generally good, but I struggled to remember my jokes, which would continue to be a problem in subsequent shows.
</>;

const data: AchievementConfig = {
  name: 'stand-up-course-showcase',
  pillar: 'artistic',
  interest: 'performance',
  rating: 'gold',
  date: new Date('2015-11-18'),
  description: 'Stand Up Course Showcase', 
  component: <Component />,
};

export default data;
