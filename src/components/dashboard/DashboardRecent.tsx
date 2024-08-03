import { useEffect, useState } from "react";
import { AchievementConfig } from "../../types";
import { list } from '../../utils/achievement-list';
import { DashboardRecentItem } from "./DashboardRecentItem";
import { Container, Header, SubGoldContainer, SubGoldItem } from "./DashboardRecent.style";
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

  if (!gold || !silver || !bronze) return 'Could not find an achievement.';

  return <Container>
    <Header>Most Recent</Header>
    <DashboardRecentItem {...gold} />
    <SubGoldContainer>
      <SubGoldItem><DashboardRecentItem {...silver} /></SubGoldItem>
      <SubGoldItem><DashboardRecentItem {...bronze} /></SubGoldItem>
    </SubGoldContainer>
  </Container>
};
