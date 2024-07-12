import { AchievementConfig } from "../types";
import { getDashboardDateFormat } from "../utils/get-dashboard-date-format";
import { Container, Link } from "./DashboardRecent.style";
import { Icon } from "./Icon";

export const DashboardRecent = ({
  name,
  category,
  subcategory,
  rating,
  date,
  description,
  component,
}: AchievementConfig) => (
  <Container rating={rating}>
    <Link href={`/${name}`}>
      <Icon category={category} subcategory={subcategory} />
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
