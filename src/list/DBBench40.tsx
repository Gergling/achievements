import { AchievementConfig } from "../types";

const Component = () => <>
  I had been trying to bench press 40kg dumbbells for about a year before I met this goal. I had reached 38kg in my late 20s (albeit with dirty form) and was able to get a few reps out for 37.5kg, but couldn't even do one for 40kg.

  Occasionally, I'd try again and simply couldn't press the weights. In the weeks leading up to meeting the goal, I moved my routine around a little. Focused on my chest a bit more. Perhaps my strength increased, maybe my form improved, but somehow on that day I was able to get four reps out.

  At 41 years old, I had feared I couldn't get any further, and would never beat a limit I hadn't been able to beat in my entire life. I proved that theory incorrect.
</>;

const data: AchievementConfig = {
  key: 'db-bench-40',
  category: 'health',
  subcategory: 'physical',
  rating: 'gold',
  date: new Date('2024-06-27'),
  description: 'Benchmark 40kg dumbbells', 
  component: <Component />,
};

export default data;
