import achievementDisplay from '../list/AchievementDisplay';
import ariaDiGelato from '../list/AriaDiGelato';
import bangedGrains from '../list/BangedGrains';
import boardGameCafe3May from '../list/BoardGameCafe3May';
import cosplayCloudStrife from '../list/CosplayCloudStrife';
import dbBench40 from '../list/DBBench40';
import firstHackathon from '../list/FirstHackathon';
import firstWrittenSketchWithoutPerformance from '../list/FirstWrittenSketchWithouPerformance';
import kungFuFirstGrade from '../list/KungFuGrading';
import helpedPaint from '../list/HelpedPaint';
import phaseIndicator from '../list/PhaseIndicator';
import sketchNLSFirstShow from '../list/SketchNLSFirstShow';
import sketchShow20240424 from '../list/SketchShow20240424';
import sketchShow20240529 from '../list/SketchShow20240529';
import sketchShowcase from '../list/SketchShowcase';
import standUp50Gigs from '../list/StandUp50Gigs';
import standUpCourseShowcase from '../list/StandUpCourseShowcase';
import standUpFirstOpenMic from '../list/StandUpFirstOpenMic';
import { AchievementConfig } from '../types';

export const list: AchievementConfig[] = [
  achievementDisplay,
  ariaDiGelato,
  bangedGrains,
  boardGameCafe3May,
  cosplayCloudStrife,
  dbBench40,
  firstHackathon,
  firstWrittenSketchWithoutPerformance,
  kungFuFirstGrade,
  helpedPaint,
  phaseIndicator,
  sketchNLSFirstShow,
  sketchShow20240424,
  sketchShow20240529,
  sketchShowcase,
  standUp50Gigs,
  standUpCourseShowcase,
  standUpFirstOpenMic,
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
