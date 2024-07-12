const ONE_DAY = 24 * 60 * 60 * 1000;

export const isSince = (date: Date, days: number, currentDate: Date = new Date()): boolean => {
  return currentDate.getTime() - (days * ONE_DAY) < date.getTime();
}
