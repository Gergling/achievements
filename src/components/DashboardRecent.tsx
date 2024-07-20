import { useEffect, useState } from "react";
import { AchievementConfig } from "../types";
import { list } from '../utils/achievement-list';
import { DashboardRecentItem } from "./DashboardRecentItem";
import { Container } from "./DashboardRecent.style";

const ratingOrder = ['gold', 'silver', 'bronze'];

const isNonNil = (value: AchievementConfig | null | undefined | void): value is AchievementConfig =>
  value != null;

const getRecent = (achievements: AchievementConfig[]): AchievementConfig[] =>
  ratingOrder.map((rating) =>
    achievements.find((achievement) => achievement.rating === rating)
  ).filter(isNonNil);

export const DashboardRecent = () => {
  const [recent, setRecent] = useState<AchievementConfig[]>([]);

  useEffect(() => {
    setRecent(getRecent(list));
  }, [list]);

  return <Container>
    {recent.map((achievement) => <DashboardRecentItem
      key={achievement.name}
      {...achievement}
    />)}
  </Container>
};
