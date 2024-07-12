import { AchievementConfig } from "../types";

const Component = () => <>
  I wrote a sketch which was performed without me in it.

  It wasn't very funny, but it was a milestone in my writing.
</>;

const data: AchievementConfig = {
  name: 'first-written-sketch-without-performance',
  category: 'artistic',
  subcategory: 'writing',
  rating: 'bronze',
  date: new Date('2022-05-31'),
  description: 'The sketch where Batman is offered a lozenge', 
  component: <Component />,
};

export default data;
