import { Interest, interests } from "../literals/interests";
import { Pillar, pillars } from "../literals/pillars";
import { Rating, ratings } from "../literals/ratings";
import { AchievementConfig } from "../types";

export type GroupingPropertyKey = keyof Pick<AchievementConfig, 'pillar' | 'interest' | 'rating'>;
type GroupingPropertyType = AchievementConfig[GroupingPropertyKey];

export type Group = {
  groupingKey: GroupingPropertyKey;
  key: GroupingPropertyType;
  label: string;
  achievements: AchievementConfig[];
};

export const ratingOrder = Object.keys(ratings) as Rating[];

const getMapping = <Type>(mappings: typeof ratings | typeof pillars | typeof interests) =>
  Object.entries(mappings).map(([key, { label }]) => ({ key: key as Type, label }));

const orderMappings: {
  [groupingKey in GroupingPropertyKey]: {
    key: AchievementConfig[groupingKey],
    label: string,
  }[];
} = {
  rating: getMapping<Rating>(ratings),
  pillar: getMapping<Pillar>(pillars),
  interest: getMapping<Interest>(interests),
};

const getOrderMapping = (key: GroupingPropertyKey) => orderMappings[key];

export const getGrouping = (achievements: AchievementConfig[], groupingKey: GroupingPropertyKey): Group[] => {
  const mapping = getOrderMapping(groupingKey);
  return mapping.map((value) => {
    const { key, label } = value;
    const group: Group = {
      groupingKey,
      key,
      label,
      achievements: achievements.filter((achievement) => achievement[groupingKey] === key),
    };
    return group;
  });
}
