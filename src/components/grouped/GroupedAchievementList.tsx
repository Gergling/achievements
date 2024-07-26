import { AchievementConfig } from "../../types";
import { GroupedAchievementItem } from "./GroupedAchievementItem";
import { List } from "./GroupedAchievementList.style";

type GroupedAchievementListProps = {
  achievements: AchievementConfig[];
};

export const GroupedAchievementList = ({
  achievements
}: GroupedAchievementListProps) => {
  return <List>
    {achievements.map(({
      name,
      pillar,
      interest,
      rating,
      date,
      description,
    }) => <GroupedAchievementItem
      key={name}
      name={name}
      pillar={pillar}
      interest={interest}
      rating={rating}
      date={date}
      description={description}
    />)}
  </List>
};
