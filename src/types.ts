// Gold: Unprecedented metric or project completion.
// Silver: Challenging goal or project completion.
// Bronze: Routine goal or project completion.

export type AchievementData = {
  category: 'artistic' | 'social' | 'health' | 'career';
  subcategory: 'physical';
  rating: 'gold' | 'silver' | 'bronze';
  date: Date;
  description: string;
  path: string;
  html: string;
};

export type AchievementConfig = {
  key: string;
  category: 'artistic' | 'social' | 'health' | 'career';
  subcategory: 'physical' | 'coding' | 'performance' | 'crafts' | 'writing';
  rating: 'gold' | 'silver' | 'bronze';
  date: Date;
  description: string;
  component: React.ReactElement;
}
