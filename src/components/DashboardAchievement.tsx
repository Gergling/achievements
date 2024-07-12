import { AchievementConfig } from "../types";
import { getDashboardDateFormat } from "../utils/get-dashboard-date-format";
import { Container, Link } from "./DashboardAchievement.style";
import { Icon } from "./Icon";

type DashboardAchievementProps = Omit<AchievementConfig, 'component'>;

export const DashboardAchievement = ({
  name,
  pillar,
  hobby,
  rating,
  date,
  description,
}: DashboardAchievementProps) => (
  <Container rating={rating}>
    <Link href={`/${name}`}>
      <Icon pillar={pillar} hobby={hobby} />
      <div>
        <div className="date">{getDashboardDateFormat(date)}</div>
        <div className="description">{description}</div>
      </div>
    </Link>
  </Container>
);
