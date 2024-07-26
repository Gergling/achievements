import { theme } from "../theme";

export type Pillar = 'artistic' | 'social' | 'health' | 'career';

const { artistic, social, health, career } = theme.pillars;

export const pillars: {
  [key in Pillar]: {
    label: string;
    description: string;
    colour: string;
  };
} = {
  artistic: {
    label: 'Artistic',
    description: 'This pillar represents my activities which indulge my arbitrary enjoyments in creating things. This includes things like writing and performance art but can also include coding projects.',
    colour: artistic,
  },
  social: {
    label: 'Social',
    description: 'I have found a great deal of joy in activities which are merely social. Since these are not hard work for me, I am unlikely to develop many achievements in this area. Then again, who knows?',
    colour: social,
  },
  health: {
    label: 'Health',
    description: 'Any activity primarily oriented around managing my health, physical, mental or otherwise. This includes my weight training, which is my only form of physical exercise.',
    colour: health,
  },
  career: {
    label: 'Career',
    description: 'Income-related achievements. These will mostly be around software development, but also the education I receive in order to improve my career prospects.',
    colour: career,
  },
};
