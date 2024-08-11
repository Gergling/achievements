import { useNavigate } from "react-router-dom";
import { AchievementConfig } from "../../types";
import { getDashboardDateFormat } from "../../utils/get-dashboard-date-format";
import { Container } from "./GroupedAchievementItem.style";
import { Icon } from "../common/icon/Icon";
import { getAchievementPageUrl } from "../../utils/get-achievement-page-url";

type GroupedAchievementProps = Omit<AchievementConfig, 'component'>;

export const GroupedAchievementItem = ({
  name,
  pillar,
  interest,
  rating,
  date,
  description,
}: GroupedAchievementProps) => {
  const navigate = useNavigate();
  return (
    <Container rating={rating} onClick={() => navigate(getAchievementPageUrl(name))}>
      <Icon pillar={pillar} interest={interest} />
      <div style={{ flexGrow: 1 }}>
        <div className="date">{getDashboardDateFormat(date)}</div>
        <div className="description">{description}</div>
      </div>
    </Container>
  );
};
