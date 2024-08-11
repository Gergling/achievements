import { theme } from "../theme";

export type Rating = 'gold' | 'silver' | 'bronze';

const { gold, silver, bronze } = theme.ratings;

export const ratings: {
  [key in Rating]: {
    label: string;
    description: string;
    colour: string;
  };
} = {
  gold: {
    label: 'Gold',
    description: 'Unprecedented metric or project completion. These might be "firsts" or "bests". These always require a lot of hard work. In most cases, each of these will be unique, but some events include enough stress that they can be justified as gold-tier (e.g. moving house).',
    colour: gold,
  },
  silver: {
    label: 'Silver',
    description: 'Challenging goal, major threshold or large project completion. These achievements required more than routine efforts, or they might be a repeat of a gold-rated achievement.',
    colour: silver,
  },
  bronze: {
    label: 'Bronze',
    description: 'Routine goal, minor threshold or small project completion. These achievements are worthy of note because my routines paid off as predicted, or maybe repeats of a silver-tier achievement.',
    colour: bronze,
  },
};
