import { AchievementConfig } from "../types";

const Component = () => <>
  This was a work event. I hadn't really understood the point of hackathons before this, and now I was being fed pieces of code to solve specific problems from people around me.

  It was socially exhausting but extremely rewarding.
</>;

const data: AchievementConfig = {
  name: 'first-hackathon',
  pillar: 'career',
  interest: 'coding',
  rating: 'silver',
  date: new Date('2024-07-03'),
  description: 'First hackathon',
  component: <Component />,
};

export default data;
