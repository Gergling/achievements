import { AchievementConfig } from "../../types";
import { getDashboardDateFormat } from "../../utils/get-dashboard-date-format";
import { Body, BodyFade, Container, Description, Header, Link, Overview } from "./DashboardRecentItem.style";
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
      <Overview>
        <Header>
          <Icon pillar={pillar} interest={interest} />
          <Description>{description}</Description>
        </Header>
        <Body>
          {getDashboardDateFormat(date)}: {component}
          <BodyFade />
        </Body>
      </Overview>
    </Link>
  </Container>
);
