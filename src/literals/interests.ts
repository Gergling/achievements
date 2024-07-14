export type Interest = 'games' | 'lifting' | 'coding' | 'performance' | 'crafts' | 'writing';

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
    description: 'My primary physical health support activity is weight training. To keep myself interested, I have a variety of goals and metrics to track.',
  },
  performance: {
    label: 'Performance',
    description: 'Performance art helps me connect to a lot of people at once and get real-time social feedback. While I haven\'t found a way to capture the feedback metrics due to technological constraints, I have been able to source a steady stream of joy from this activity, making it quite sustainable.',
  },
  writing: {
    label: 'Writing',
    description: 'I am not a natural writer. In my long history of attempts, everything I have written (with minimal exceptions) is difficult to read or understand, or in the most unfortunate cases, simply boring. However, I enjoy it, and it\'s cheap.',
  },
};
