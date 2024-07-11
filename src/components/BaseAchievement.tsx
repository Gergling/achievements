// export default {
//   category: 'artistic',
//   subcategory: 'coding',
//   rating: 'silver',
//   date: new Date('2026-12-31'),
//   description: 'Achievement Display', 
// };

// All the above are required for the component props.
// The contents are conditional on whether the context is an item or a page.
// So this will choose which component based on that.

export type BaseAchievementProps = {
  category: 'artistic' | 'social' | 'health' | 'career';
  subcategory: 'physical';
  rating: 'gold' | 'silver' | 'bronze';
  date: Date;
  description: string;
};

export const BaseAchievement = (props: BaseAchievementProps) => {
  
};
