import { createElement } from 'react';
import { AchievementConfig } from "../types";
import { getGrouping, ratingOrder } from "./get-grouping";

// const Component = () => {
//   return createElement(
//     'div',
//     'Component'
//   );
// }

const getAchievementTemplate = (overrideProperties: Partial<AchievementConfig>): AchievementConfig => ({
  name: 'achievement-1',
  pillar: 'artistic',
  interest: 'coding',
  rating: 'silver',
  date: new Date('2024-10-06'),
  description: 'Achievement Display',
  component: createElement('div', 'Component'),
  ...overrideProperties,
});


describe('Rating order', () => {
  test('ratingOrder is in the correct order', () => {
    expect(ratingOrder).toEqual(['gold', 'silver', 'bronze']);
  });
});

describe('getGrouping', () => {
  const achievements: AchievementConfig[] = ([
    { rating: 'gold' },
    { rating: 'silver' },
    { rating: 'bronze' },
    { rating: 'bronze' },
  ] as const).map(getAchievementTemplate);
  test('getGrouping returns the correct grouping', () => {
    const groupedByRating = getGrouping(achievements, 'rating');
    expect(groupedByRating).toEqual([
      {
        groupingKey: 'rating',
        key: 'gold',
        label: 'Gold',
        achievements: [achievements[0]],
      },
      {
        groupingKey: 'rating',
        key: 'silver',
        label: 'Silver',
        achievements: [achievements[1]],
      },
      {
        groupingKey: 'rating',
        key: 'bronze',
        label: 'Bronze',
        achievements: [achievements[2], achievements[3]],
      },
    ]);
  });
});
