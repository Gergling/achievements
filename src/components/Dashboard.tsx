import { useEffect, useState } from 'react';
import { list } from '../utils/achievement-list';
import { List } from './Dashboard.style';
import { DashboardAchievement } from './DashboardAchievement';
import ViewContext from './ViewContext';
import { AchievementConfig } from '../types';
import { isSince } from '../utils/is-since';
import { DashboardRecent } from './DashboardRecent';

type Group = {
  label: string;
  achievements: AchievementConfig[];
};

type GroupingMode = 'date' | 'rating';

const dateGroups = {
  '7 Days': (date: Date) => isSince(date, 7),
  '30 Days': (date: Date) => isSince(date, 30),
  '1 Year': (date: Date) => isSince(date, 365),
  'Earlier': () => true,
};

const ratingLabels = [
  { rating: 'gold', label: 'Gold' },
  { rating: 'silver', label: 'Silver' },
  { rating: 'bronze', label: 'Bronze' },
];

const getGroupingByDate = (achievementsOriginal: AchievementConfig[]): Group[] => {
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
};

const getGroupingByRating = (achievements: AchievementConfig[]): Group[] =>
  ratingLabels.map(({ rating, label }) => ({
    label,
    achievements: achievements.filter((achievement) => achievement.rating === rating),
  }));

const isNonNil = (value: AchievementConfig | null | undefined | void): value is AchievementConfig =>
  value != null;

const getRecent = (achievements: AchievementConfig[]): AchievementConfig[] =>
  ratingLabels.map(({ rating }) =>
    achievements.find((achievement) => achievement.rating === rating)
  ).filter(isNonNil);

export const Dashboard = () => {
  const [grouping, setGrouping] = useState<Group[]>([]);
  const [recent, setRecent] = useState<AchievementConfig[]>([]);
  const [groupingMode, setGroupingMode] = useState<GroupingMode>('date');

  const updateGrouping = () => {
    if (groupingMode === 'date') {
      setGrouping(getGroupingByDate(list));
    } else {
      setGrouping(getGroupingByRating(list));
    }
  };

  const handleGroupingMode = (mode: GroupingMode) => () => {
    setGroupingMode(mode);
  };

  useEffect(() => {
    updateGrouping();
    setRecent(getRecent(list));
  }, [list]);

  useEffect(() => {
    updateGrouping();
  }, [groupingMode]);

  return (
    <ViewContext.Provider value="dashboard">
      <ul>
        <li>Consider renaming category and subcategory to something like "pillar" and "hobby".</li>
        <li>Achievements should always be sorted newest to oldest.</li>
      </ul>
      <ul>
        {recent.map((achievement) => <DashboardRecent
          key={achievement.name}
          {...achievement}
        />)}
      </ul>
      By
      <button onClick={handleGroupingMode('date')}>Date</button>
      |
      <button onClick={handleGroupingMode('rating')}>Rating</button>
      <ul>
        {grouping
          .filter(({ achievements }) => achievements.length > 0)
          .map(({ label, achievements }) => (
            <li key={label}>
              {grouping.length > 1 ? label : ''}
              <List>
                {achievements.map(({
                  name,
                  category,
                  subcategory,
                  rating,
                  date,
                  description,
                }) => <DashboardAchievement
                  key={name}
                  name={name}
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
