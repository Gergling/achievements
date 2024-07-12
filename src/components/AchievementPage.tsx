import { useParams } from "react-router-dom";
import ViewContext from "./ViewContext";
import { list } from "../utils/achievement-list";
import { RatingBorder } from "./AchievementPage.style";
import { getDashboardDateFormat } from "../utils/get-dashboard-date-format";
import { Icon } from "./Icon";

export const AchievementPage = () => {
  const { achievementName } = useParams();

  const achievement = list.find(({ name }) => name === achievementName);

  if (!achievement) {
    return <div>Not found</div>;
  }

  const {
    pillar,
    hobby,
    rating,
    date,
    description,
    component,
  } = achievement;

  return <ViewContext.Provider value="detail">
    <a style={{ color: '#ddd' }} href='/'>Dashboard</a>
    <div style={{ display: 'flex' }}>
      <RatingBorder rating={rating}>
        <Icon pillar={pillar} hobby={hobby} />
      </RatingBorder>
      <div style={{ display: 'flex' }}>
        <div>{getDashboardDateFormat(date)}</div>
        <div>{description}</div>
      </div>
    </div>
    <div>{component}</div>
  </ViewContext.Provider>
};
