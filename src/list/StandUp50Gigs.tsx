import { AchievementConfig } from "../types";

const Component = () => <>
  This should be about 50 separate bronze achievements, one for each gig, and one day it might be if I find the list of dates and put them through a script which generates all of these.

  For now, this is it. This was the date of my last stand-up gig, having become frustrated with my lackj of progress at memorising my jokes.
  
  I basically took some time out of written comedy after this, to do improv, which I found to have a much faster and lower-effort conception-to-performance speed.

  I do not regret the time I spent on stand-up. I don't regret the time I took doing other things after, either.
</>;

const data: AchievementConfig = {
  name: 'stand-up-50-gigs',
  pillar: 'artistic',
  interest: 'performance',
  rating: 'bronze',
  date: new Date('2016-08-30'),
  description: 'Stand Up 50 Gigs Later', 
  component: <Component />,
};

export default data;
