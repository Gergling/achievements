import { AchievementConfig } from "../types";

const Component = () => <>
  I mainly made this because I could visualise it and I wanted to return to playing with Lego for some complex devices.
</>;

const data: AchievementConfig = {
  name: 'phase-indicator',
  category: 'artistic',
  subcategory: 'crafts',
  rating: 'silver',
  date: new Date('2024-06-25'),
  description: 'Lego Phase Indicator',
  component: <Component />,
};

export default data;
