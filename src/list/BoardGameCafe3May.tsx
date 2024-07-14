import { AchievementConfig } from "../types";

const Component = () => <>
  In which I helped organise a board game cafe meet-up in Waterloo's Draughts with 5 friends. We played a version of pandemic, and we won.
</>;

const data: AchievementConfig = {
  name: 'board-game-cafe-3-may-2024',
  pillar: 'social',
  interest: 'games',
  rating: 'bronze',
  date: new Date('2024-05-03'),
  description: 'Helped organise a board game cafe meet-up',
  component: <Component />,
};

export default data;
