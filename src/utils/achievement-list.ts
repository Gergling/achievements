import achievementDisplay from '../list/AchievementDisplay';
import ariaDiGelato from '../list/AriaDiGelato';
import bangedGrains from '../list/BangedGrains';
import cosplayCloudStrife from '../list/CosplayCloudStrife';
import dbBench40 from '../list/DBBench40';
import firstHackathon from '../list/FirstHackathon';
import firstWrittenSketchWithoutPerformance from '../list/FirstWrittenSketchWithouPerformance';
import phaseIndicator from '../list/PhaseIndicator';
import { AchievementConfig } from '../types';

export const list: AchievementConfig[] = [
  achievementDisplay,
  ariaDiGelato,
  bangedGrains,
  cosplayCloudStrife,
  dbBench40,
  firstHackathon,
  firstWrittenSketchWithoutPerformance,
  phaseIndicator,
].sort((a, b) => {
  const aDate = a.date;
  const bDate = b.date;

  if (aDate > bDate) {
    return -1;
  } else if (aDate < bDate) {
    return 1;
  }
  return 0;
});
