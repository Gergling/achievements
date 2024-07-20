import { AchievementConfig } from "../types";
import { getDashboardDateFormat } from "../utils/get-dashboard-date-format";
import { Container, Link } from "./DashboardRecentItem.style";
import { Icon } from "./Icon";

export const DashboardRecentItem = ({
  name,
  pillar,
  interest,
  rating,
  date,
  description,
  component,
}: AchievementConfig) => (
  <Container rating={rating}>
    <Link href={`/${name}`}>
      <Icon pillar={pillar} interest={interest} />
      <div>
        <div style={{ display: 'flex' }}>
          <div className="date">{getDashboardDateFormat(date)}</div>
          <div style={{ overflow: 'hidden' }}>{description}</div>
        </div>
        <div>{component}</div>
      </div>
    </Link>
  </Container>
);
