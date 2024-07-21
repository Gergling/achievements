import { useNavigate } from "react-router-dom";
import { AchievementConfig } from "../../types";
import { getDashboardDateFormat } from "../../utils/get-dashboard-date-format";
import { Container } from "./DashboardAchievement.style";
import { Icon } from "../common/Icon";

type DashboardAchievementProps = Omit<AchievementConfig, 'component'>;

export const DashboardAchievement = ({
  name,
  pillar,
  interest,
  rating,
  date,
  description,
}: DashboardAchievementProps) => {
  const navigate = useNavigate();
  return (
    <Container rating={rating} onClick={() => navigate(`/${name}`)}>
      <Icon pillar={pillar} interest={interest} />
      <div>
        <div className="date">{getDashboardDateFormat(date)}</div>
        <div className="description">{description}</div>
      </div>
    </Container>
  );
};
