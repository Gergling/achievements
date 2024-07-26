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
    description: 'Unprecedented metric or project completion. These might be "firsts" or "bests".',
    colour: gold,
  },
  silver: {
    label: 'Silver',
    description: 'Challenging goal or project completion. These achievements required more than routine efforts, or they might be a repeat of a gold-rated achievement.',
    colour: silver,
  },
  bronze: {
    label: 'Bronze',
    description: 'Routine goal or project completion. These achievements are worthy of note because my routines paid off as predicted, or maybe repeats of a silver-tier achievement.',
    colour: bronze,
  },
};
