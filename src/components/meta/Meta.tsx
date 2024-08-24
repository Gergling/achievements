import { Link } from "react-router-dom";
import { Interest, interests } from "../../literals/interests";
import { Pillar, pillars } from "../../literals/pillars";
import { Rating, ratings } from "../../literals/ratings";
import { AchievementConfig } from "../../types";
import { IconByInterest } from "../common/icon/IconByInterest";
import { Heading, MetaStyledIconContainer, StyledColourIcon, Subheading } from "./Meta.style";
import { MetaItem } from "./MetaItem";
import { list } from "../../utils/achievement-list";
import { getGrouping, Group, GroupingPropertyKey, GroupingPropertyType } from "../../utils/get-grouping";

type IconProps<Type extends keyof AchievementConfig> = {
  [key in Type]: AchievementConfig[key];
};

const InterestIcon = ({ interest }: IconProps<'interest'>) => {
  return <MetaStyledIconContainer>
    <IconByInterest interest={interest} />
  </MetaStyledIconContainer>
};

const IconContainer = ({ colour }: { colour: string }) => (
  <MetaStyledIconContainer>
    <StyledColourIcon colour={colour} />
  </MetaStyledIconContainer>
);

const PillarIcon = ({ pillar }: IconProps<'pillar'>) => {
  const colour = pillars[pillar].colour;
  return <IconContainer colour={colour} />;
};

const RatingIcon = ({ rating }: IconProps<'rating'>) => {
  const colour = ratings[rating].colour
  return <IconContainer colour={colour} />;
};

type ListItem = {
  key: GroupingPropertyType;
  label: string;
  description: string;
  Element: () => JSX.Element;
  group?: Group;
};

const List = ({ items }: { items: ListItem[] }) => (
  <ul>
    {items.map(({ key, label, description, Element, group }) => (
      <MetaItem key={key} label={label} description={description} group={group}>
        <Element />
      </MetaItem>
    ))}
  </ul>
);

const getList = <Type extends GroupingPropertyType>(
  mappings: { [key in Type]: { label: string; description: string }; },
  groupingKey: GroupingPropertyKey,
  getElement: (key: Type) => JSX.Element,
): ListItem[] => {
  const groups: Group[] = getGrouping(list, groupingKey);
  const entries = Object.entries(mappings) as [Type, { label: string; description: string }][];
  return entries.map(([key, { label, description }]) => {
    const group = groups.find((group) => group.key === key);
    return {
      key,
      label,
      description,
      Element: () => getElement(key),
      group,
    };
  });
};

export const Meta = () => {
  const pillarList = getList<Pillar>(pillars, 'pillar', (key) => <PillarIcon pillar={key} />);
  const ratingList = getList<Rating>(ratings, 'rating', (key) => <RatingIcon rating={key} />);
  const interestList = getList<Interest>(interests, 'interest', (key) => <InterestIcon interest={key} />);
  return (
    <div>
      <Heading>Glossary</Heading>
      <Link to="/">Back to achievements</Link>
      <div>
        <Subheading>Ratings</Subheading>
        <List items={ratingList} />
      </div>
      <div>
        <Subheading>Pillars</Subheading>
        <List items={pillarList} />
      </div>
      <div>
        <Subheading>Interests</Subheading>
        <List items={interestList} />
      </div>
    </div>
  );
};
