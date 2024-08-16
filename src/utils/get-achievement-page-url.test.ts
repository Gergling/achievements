import { getAchievementPageUrl } from "./get-achievement-page-url";

describe('getAchievementPageUrl', () => {
  test('should return the correct url', () => {
    expect(getAchievementPageUrl('x')).toBe('/achievement/x');
    expect(getAchievementPageUrl('y')).toBe('/achievement/y');
  });
});
