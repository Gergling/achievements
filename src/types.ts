// Gold: Unprecedented metric or project completion.
// Silver: Challenging goal or project completion.
// Bronze: Routine goal or project completion.

export type AchievementConfig = {
  name: string;
  category: 'artistic' | 'social' | 'health' | 'career';
  subcategory: 'physical' | 'coding' | 'performance' | 'crafts' | 'writing';
  rating: 'gold' | 'silver' | 'bronze';
  date: Date;
  description: string;
  component: React.ReactElement;
}
