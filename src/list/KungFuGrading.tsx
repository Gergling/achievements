import { AchievementConfig } from "../types";

const Component = () => <>
  I joined a Wing Chun Kung Fu class near my house back in May or thereabouts and despite irregular attendance, I managed to pass the grading for 1st Grade.
  
  Prior to this I'd trained Wing Chun (and other martial arts) before, but my previous classes had been too far to go once I moved house. Eventually I started this class.
</>;

const data: AchievementConfig = {
  name: 'kung-fu-1st-grade',
  pillar: 'artistic',
  interest: 'martialarts',
  rating: 'silver',
  date: new Date('2024-08-10'),
  description: 'Kung Fu 1st Grade',
  component: <Component />,
};

export default data;
