import { AchievementConfig } from "../../types";
import { getDashboardDateFormat } from "../../utils/get-dashboard-date-format";
import { Body, BodyFade, Container, Header, Link, Overview } from "./DashboardRecentItem.style";
import { Icon } from "../common/Icon";

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
    <Link to={`/${name}`}>
      <Icon pillar={pillar} interest={interest} />
      <Overview>
        <Header>
          <div className="date">{getDashboardDateFormat(date)}</div>
          <div style={{ overflow: 'hidden' }}>{description}</div>
        </Header>
        <Body>
          {component}
          <BodyFade />
        </Body>
      </Overview>
    </Link>
  </Container>
);
