import { Group } from "../../utils/get-grouping";
import { StyledMetaItem } from "./MetaItem.style";

type MetaItemProps = {
  label: string;
  description: string;
  children: React.ReactNode;
  group?: Group;
};

export const MetaItem = ({ label, description, children, group }: MetaItemProps) => {
  const appliesToTotalAchievements = group ? group.achievements.length : 0;
  return (
    <StyledMetaItem>
      <div>{children}</div>
      <div>
        <h3>{label}</h3>
        <p>Applies to {appliesToTotalAchievements} achievements.</p>
        <p>{description}</p>
      </div>
    </StyledMetaItem>
  );
};