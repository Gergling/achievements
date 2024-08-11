import { Link } from "react-router-dom";
import { Interest, interests } from "../../literals/interests";
import { Pillar, pillars } from "../../literals/pillars";
import { Rating, ratings } from "../../literals/ratings";
import { AchievementConfig } from "../../types";
import { IconByInterest } from "../common/icon/IconByInterest";
import { Heading, MetaStyledIconContainer, StyledColourIcon, Subheading } from "./Meta.style";
import { MetaItem } from "./MetaItem";

type InterestIconProps = {
  interest: AchievementConfig['interest'];
};

type PillarIconProps = {
  pillar: AchievementConfig['pillar'];
};

type RatingIconProps = {
  rating: AchievementConfig['rating'];
};

const InterestIcon = ({ interest }: InterestIconProps) => {
  return <MetaStyledIconContainer>
    <IconByInterest interest={interest} />
  </MetaStyledIconContainer>
};

const IconContainer = ({ colour }: { colour: string }) => (
  <MetaStyledIconContainer>
    <StyledColourIcon colour={colour} />
  </MetaStyledIconContainer>
);

const PillarIcon = ({ pillar }: PillarIconProps) => {
  const colour = pillars[pillar].colour;
  return <IconContainer colour={colour} />;
};

const RatingIcon = ({ rating }: RatingIconProps) => {
  const colour = ratings[rating].colour
  return <IconContainer colour={colour} />;
};

type ListItem = {
  key: string;
  label: string;
  description: string;
  Element: () => JSX.Element;
};

const List = ({ items }: { items: ListItem[] }) => (
  <ul>
    {items.map(({ key, label, description, Element }) => (
      <MetaItem key={key} label={label} description={description}>
        <Element />
      </MetaItem>
    ))}
  </ul>
);

export const Meta = () => {
  const pillarList: ListItem[] = Object.entries(pillars).map(([key, { label, description }]) => {
    return {
      key,
      label,
      description,
      Element: () => <PillarIcon pillar={key as Pillar} />
    }
  });
  const ratingList: ListItem[] = Object.entries(ratings).map(([key, { label, description }]) => {
    return {
      key,
      label,
      description,
      Element: () => <RatingIcon rating={key as Rating} />
    };
  });
  const interestList: ListItem[] = Object.entries(interests).map(([key, { label, description }]) => {
    return {
      key,
      label,
      description,
      Element: () => <InterestIcon interest={key as Interest} />
    }
  });
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
