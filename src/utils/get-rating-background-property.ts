import { AchievementConfig } from "../types";
import { getLinearGradientBackgroundProperty } from './get-linear-gradient-property';

export const getRatingBackgroundProperty = ({ rating, theme }: {
  rating: AchievementConfig['rating'];
  theme: any;
}) => {
  const colour = theme.ratings[rating];
  return getLinearGradientBackgroundProperty({ colour });
};
