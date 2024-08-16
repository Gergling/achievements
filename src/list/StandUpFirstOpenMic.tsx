import { AchievementConfig } from "../types";

const Component = () => <>
  This was the first time I booked a stand-up gig myself, rather than the showcase which was "booked" for me.

  I didn't notice quality to be much lower. Most such gigs I would do would be quite similar: in pub function rooms with maybe as many as 20 people, half of which are acts and the other half of which are also acts but not performing that night and turned up to pad out the numbers as a favour.

  I always enjoyed these, some more than others, and didn't regret them.
</>;

const data: AchievementConfig = {
  name: 'stand-up-first-open-mic',
  pillar: 'artistic',
  interest: 'performance',
  rating: 'silver',
  date: new Date('2015-12-01'),
  description: 'First Stand Up Gig', 
  component: <Component />,
};

export default data;
