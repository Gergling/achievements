import { AchievementConfig } from "../../types";
import { getDashboardDateFormat } from "../../utils/get-dashboard-date-format";
import { Body, BodyFade, Container, Description, Header, Link, Overview } from "./DashboardRecentItem.style";
import { Icon } from "../common/icon/Icon";
import { getAchievementPageUrl } from "../../utils/get-achievement-page-url";

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
    <Link to={getAchievementPageUrl(name)}>
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
