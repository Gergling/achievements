import { isSince } from "./is-since";

describe('isSince', () => {
  test('should return true if the date is within the last 7 days', () => {
    const date = new Date();
    date.setDate(date.getDate() - 6);
    expect(isSince(date, 7)).toBe(true);
  });
  test('should return false if the date is more than 7 days ago', () => {
    const date = new Date();
    date.setDate(date.getDate() - 8);
    expect(isSince(date, 7)).toBe(false);
  });
});
