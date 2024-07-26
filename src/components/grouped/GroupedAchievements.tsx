import { useEffect, useState } from "react";
import { AchievementConfig } from "../../types";
import { isSince } from "../../utils/is-since";
import { Rating, ratings } from "../../literals/ratings";
import { list } from "../../utils/achievement-list";
import { Grouped, GroupedHeader } from "./GroupedAchievements.style";
import { GroupedAchievementList } from "./GroupedAchievementList";

type Group = {
  label: string;
  achievements: AchievementConfig[];
};

type GroupingMode = 'date' | 'rating';

const groupingModes: {
  [key in GroupingMode]: string;
} = {
  date: 'Date',
  rating: 'Rating',
};

const dateGroups = {
  'In the last 7 Days': (date: Date) => isSince(date, 7),
  'In the last 30 Days': (date: Date) => isSince(date, 30),
  'In the last year': (date: Date) => isSince(date, 365),
  'Earlier': () => true,
};

const ratingOrder: Rating[] = ['gold', 'silver', 'bronze'];

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
  ratingOrder.map((rating) => ({
    label: ratings[rating].label,
    achievements: achievements.filter((achievement) => achievement.rating === rating),
  }));

type GroupingModeControlProps = {
  modeName: GroupingMode;
  handleGroupingMode: (mode: GroupingMode) => any;
};

const GroupingModeControl = ({
  modeName,
  handleGroupingMode,
}: GroupingModeControlProps) => {
  const modeLabel = groupingModes[modeName];
  const otherGroupingModes: {
    name: GroupingMode,
    label: string
  }[] = Object
    .entries(groupingModes)
    .filter(([key]) => key !== modeName)
    .map(([name, label]) => ({ name: name as GroupingMode, label }));

  return <div>
    <span>Grouping by {modeLabel}</span> |
    Group by
    {otherGroupingModes.map(({ name, label }) => (
      <button key={name} onClick={() => handleGroupingMode(name)}>{label}</button>
    ))}
  </div>;
};

export const GroupedAchievements = () => {
  const [grouping, setGrouping] = useState<Group[]>([]);
  const [groupingMode, setGroupingMode] = useState<GroupingMode>('date');

  const updateGrouping = () => {
    if (groupingMode === 'date') {
      setGrouping(getGroupingByDate(list));
    } else {
      setGrouping(getGroupingByRating(list));
    }
  };

  const handleGroupingMode = (mode: GroupingMode): any => setGroupingMode(mode);

  useEffect(() => {
    updateGrouping();
  }, [groupingMode]);

  return (
    <>
      <GroupingModeControl modeName={groupingMode} handleGroupingMode={handleGroupingMode} />
      <Grouped>
        {grouping
          .filter(({ achievements }) => achievements.length > 0)
          .map(({ label, achievements }) => (
            <li key={label}>
              {grouping.length > 1 ? <GroupedHeader>{label}</GroupedHeader> : ''}
              <GroupedAchievementList achievements={achievements} />
            </li>
          )
        )}
      </Grouped>
    </>
  );
};
