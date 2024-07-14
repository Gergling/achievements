import { Interest } from "./literals/interests";
import { Pillar } from "./literals/pillars";
import { Rating } from "./literals/ratings";

export type AchievementConfig = {
  name: string;
  pillar: Pillar;
  interest: Interest;
  rating: Rating;
  date: Date;
  description: string;
  component: React.ReactElement;
}
