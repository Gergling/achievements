import { AchievementConfig } from "../types";
import { Container, Link } from "./DashboardAchievement.style";
import { Icon } from "./Icon";

type DashboardAchievementProps = Omit<AchievementConfig, 'component'>;

const getDashboardDateFormat = (date: Date): string => {
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
};

export const DashboardAchievement = ({
  key,
  category,
  subcategory,
  rating,
  date,
  description,
}: DashboardAchievementProps) => (
  <Container rating={rating}>
    <Link href={`/${key}`}>
      <Icon category={category} subcategory={subcategory} />
      <div>
        <div className="date">{getDashboardDateFormat(date)}</div>
        <div className="description">{description}</div>
      </div>
    </Link>
  </Container>
)