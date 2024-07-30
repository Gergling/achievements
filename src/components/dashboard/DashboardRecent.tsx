import { useEffect, useState } from "react";
import { AchievementConfig } from "../../types";
import { list } from '../../utils/achievement-list';
import { DashboardRecentItem } from "./DashboardRecentItem";
import { Bronze, Container, Silver, SubGoldContainer } from "./DashboardRecent.style";
import { Rating } from "../../literals/ratings";

const getRecentByRating = (rating: Rating, achievements: AchievementConfig[]) =>
  achievements.find((achievement) => achievement.rating === rating)

export const DashboardRecent = () => {
  const [gold, setGold] = useState<AchievementConfig>();
  const [silver, setSilver] = useState<AchievementConfig>();
  const [bronze, setBronze] = useState<AchievementConfig>();

  useEffect(() => {
    setGold(getRecentByRating('gold', list));
    setSilver(getRecentByRating('silver', list));
    setBronze(getRecentByRating('bronze', list));
  }, [list]);

  if (!gold || !silver || !bronze) return null;

  return <Container>
    <DashboardRecentItem {...gold} />
    <SubGoldContainer>
      <Silver><DashboardRecentItem {...silver} /></Silver>
      <Bronze><DashboardRecentItem {...bronze} /></Bronze>
    </SubGoldContainer>
  </Container>
};
