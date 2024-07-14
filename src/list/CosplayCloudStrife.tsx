import { AchievementConfig } from "../types";

const Component = () => <>
  Mis-dated. This is about the cosplay. The date of the event is the correct date.
</>;

const data: AchievementConfig = {
  name: 'cosplay-cloud-strife',
  pillar: 'artistic',
  interest: 'crafts',
  rating: 'gold',
  date: new Date('2023-03-18'),
  description: 'Cloud Strife cosplay', 
  component: <Component />,
};

export default data;
