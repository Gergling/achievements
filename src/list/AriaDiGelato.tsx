import { AchievementConfig } from "../types";

const Component = () => <>
  This was my first musical performance that I'd written where I felt the performance was very strong. I felt that was sufficiently unprecedented that I gave it gold.
</>;

const data: AchievementConfig = {
  name: 'aria-di-gelato',
  category: 'artistic',
  subcategory: 'performance',
  rating: 'gold',
  date: new Date('2024-05-29'),
  description: 'Aria di Gelato', 
  component: <Component />,
};

export default data;
