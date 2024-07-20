import { DashboardRecent } from './DashboardRecent';
import { GroupedAchievements } from './grouped/GroupedAchievements';

export const Dashboard = () => {
  return (
    <>
      <DashboardRecent />
      <GroupedAchievements />
    </>
  );
};
