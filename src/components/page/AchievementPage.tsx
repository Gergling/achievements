import { useParams } from "react-router-dom";
import { list } from "../../utils/achievement-list";
import { RatingBorder } from "./AchievementPage.style";
import { getDashboardDateFormat } from "../../utils/get-dashboard-date-format";
import { Icon } from "../common/icon/Icon";

export const AchievementPage = () => {
  const { achievementName } = useParams();

  const achievement = list.find(({ name }) => name === achievementName);

  if (!achievement) {
    return <div>Achievement page. No achievement found named "{achievementName}".</div>;
  }

  const {
    pillar,
    interest,
    rating,
    date,
    description,
    component,
  } = achievement;

  return <>
    <a style={{ color: '#ddd' }} href='#/'>Dashboard</a>
    <div style={{ display: 'flex' }}>
      <RatingBorder rating={rating}>
        <Icon pillar={pillar} interest={interest} />
      </RatingBorder>
      <div style={{ display: 'flex' }}>
        <div>{getDashboardDateFormat(date)}</div>
        <div>{description}</div>
      </div>
    </div>
    <div>{component}</div>
  </>
};
