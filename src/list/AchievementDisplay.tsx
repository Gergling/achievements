import { AchievementConfig } from "../types";

const Component = () => <>
  I mostly made this inspired by a visual and because I've observed that keeping track of your own successes is good for mental health.

  While technologically routine, the main challenge for this was the graphical aspects, as I'm not much of a designer and I don't usually have much need for the CSS complexity. I decided it earned a silver because it was challenging otherwise though.

  I have not included a graphic for reasons which might be obvious.
</>;

const data: AchievementConfig = {
  name: 'achievement-display',
  pillar: 'artistic',
  hobby: 'coding',
  rating: 'silver',
  date: new Date('2026-12-31'),
  description: 'Achievement Display',
  component: <Component />,
};

export default data;
