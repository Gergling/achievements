export type Interest =
  'coding' |
  'martialarts' |
  'games' |
  'lifting' |
  'maintenance' |
  'performance' |
  'crafts' |
  'writing';

export const interests: {
  [key in Interest]: {
    label: string;
    description: string;
  };
} = {
  coding: {
    label: 'Writing Code',
    description: 'Apart from being my career, this is also an activity I enjoy, so that\'s convenient.',
  },
  crafts: {
    label: 'Crafts',
    description: 'Sometimes I like to make something physical. Due to resources required other than time, (but also time), this is a less frequent activity, but also affords a steady joy payout.',
  },
  games: {
    label: 'Games',
    description: 'Board, computer, card, or anything really. I believe in games as a way to learn how rules work. This is especially useful if the games represent a special real-world system, like a market or a war.',
  },
  lifting: {
    label: 'Weight Training',
    description: 'My primary physical health support activity is weight training. To keep myself interested, I have a variety of goals and metrics to track. Explaining my weight training system is like trying to explain an unlikely conspiracy theory.',
  },
  maintenance: {
    label: 'Maintenance',
    description: 'This is usually something I have to do or endure to keep my life running.',
  },
  martialarts: {
    label: 'Martial Arts',
    description: 'Physical exercise plus making me use my brain plus learning stuff plus an opportunity to socialise. What\'s not to like?',
  },
  performance: {
    label: 'Performance Art',
    description: 'Performance art helps me connect to a lot of people at once and get real-time social feedback. While I haven\'t found a way to capture the feedback metrics due to technological constraints, I have been able to source a steady stream of joy from this activity, making it quite sustainable.',
  },
  writing: {
    label: 'Writing',
    description: 'I am not a natural writer. In my long history of attempts, everything I have written (with minimal exceptions) is difficult to read or understand, or in the most unfortunate cases, simply boring. However, I enjoy it, and it\'s cheap.',
  },
};
