import { AchievementConfig } from "../types";

const Component = () => <>
  One of my friends recently moved house and needed help painting a wall. I was happy to help, and I think it turned out well. I'm not much of a painter, but I think I did a good job.
</>;

const data: AchievementConfig = {
  name: 'achievement-display',
  pillar: 'social',
  interest: 'maintenance',
  rating: 'silver',
  date: new Date('2024-07-27'),
  description: 'Helped paint a friend\'s wall',
  component: <Component />,
};

export default data;
