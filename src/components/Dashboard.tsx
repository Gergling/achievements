import { useEffect, useState } from 'react';
import { list } from '../utils/achievement-list';
import { List } from './Dashboard.style';
import { DashboardAchievement } from './DashboardAchievement';
import ViewContext from './ViewContext';
import { AchievementConfig } from '../types';
import { isSince } from '../utils/is-since';

type Group = {
  label: string;
  achievements: AchievementConfig[];
};

const dateGroups = {
  '7 Days': (date: Date) => isSince(date, 7),
  '30 Days': (date: Date) => isSince(date, 30),
  '1 Year': (date: Date) => isSince(date, 365),
  'Earlier': () => true,
};

const getGroupingByDate = (achievementsOriginal: AchievementConfig[]) => {
  let achievements = achievementsOriginal.map((achievement) => ({
    achievement,
    isGrouped: false,
  }));
  return Object.entries(dateGroups).map(([label, check]) => {
    return {
      label,
      achievements: achievements.filter((achievement) => {
        if (!achievement.isGrouped && check(achievement.achievement.date)) {
          achievement.isGrouped = true;
          return true;
        }
        return false;
      }).map(({ achievement }) => achievement),
    };
  });
}

export const Dashboard = () => {
  const [grouping, setGrouping] = useState<Group[]>([]);

  useEffect(() => {
    setGrouping(getGroupingByDate(list));
  });

  return (
    <ViewContext.Provider value="dashboard">
      <ul>
        <li>Most recent gold, silver and bronze achievements should go here.</li>
        <li>A mode for switching between grouping by date or by rating (and maybe even a filter for category?)</li>
        <li>Consider renaming category and subcategory to something like "pillar" and "hobby".</li>
        <li>Achievements should always be sorted newest to oldest.</li>
      </ul>
      <ul>
        {grouping
          .filter(({ achievements }) => achievements.length > 0)
          .map(({ label, achievements }) => (
            <li>
              {label}
              <List>
                {achievements.map(({
                  key,
                  category,
                  subcategory,
                  rating,
                  date,
                  description,
                }) => <DashboardAchievement
                  key={key}
                  category={category}
                  subcategory={subcategory}
                  rating={rating}
                  date={date}
                  description={description}
                />)}
              </List>
            </li>
          )
        )}
      </ul>
    </ViewContext.Provider>
  );
};
