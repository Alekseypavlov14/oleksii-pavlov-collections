import { Range, RangeValues } from '../range';

let range: Range;
let rangeValues: RangeValues;

beforeEach(() => {
  rangeValues = { min: 0, max: 10 };
  range = new Range(rangeValues);
});

test('should return the range values', () => {
  expect(range.getValues()).toEqual(rangeValues);
});

test('within should return value if within the range', () => {
  expect(range.within(5)).toBe(5);
});

test('within should return min if value is less than min', () => {
  expect(range.within(-5)).toBe(0);
});

test('within should return max if value is greater than max', () => {
  expect(range.within(15)).toBe(10);
});

test('isGreaterThanMinAndLessThanMax should return true if value is within (min, max)', () => {
  expect(range.isGreaterThanMinAndLessThanMax(5)).toBe(true);
});

test('isGreaterThanMinAndLessThanMax should return false if value is not within (min, max)', () => {
  expect(range.isGreaterThanMinAndLessThanMax(0)).toBe(false);
  expect(range.isGreaterThanMinAndLessThanMax(10)).toBe(false);
});

test('isGreaterThanMinOrEqualAndLessThanMax should return true if value is within [min, max)', () => {
  expect(range.isGreaterThanMinOrEqualAndLessThanMax(0)).toBe(true);
  expect(range.isGreaterThanMinOrEqualAndLessThanMax(5)).toBe(true);
});

test('isGreaterThanMinOrEqualAndLessThanMax should return false if value is not within [min, max)', () => {
  expect(range.isGreaterThanMinOrEqualAndLessThanMax(-5)).toBe(false);
  expect(range.isGreaterThanMinOrEqualAndLessThanMax(10)).toBe(false);
});

test('isGreaterThanMinAndLessThanMaxOrEqual should return true if value is within (min, max]', () => {
  expect(range.isGreaterThanMinAndLessThanMaxOrEqual(5)).toBe(true);
  expect(range.isGreaterThanMinAndLessThanMaxOrEqual(10)).toBe(true);
});

test('isGreaterThanMinAndLessThanMaxOrEqual should return false if value is not within (min, max]', () => {
  expect(range.isGreaterThanMinAndLessThanMaxOrEqual(0)).toBe(false);
  expect(range.isGreaterThanMinAndLessThanMaxOrEqual(15)).toBe(false);
});

test('isGreaterThanMinOrEqualAndLessThanMaxOrEqual should return true if value is within [min, max]', () => {
  expect(range.isGreaterThanMinOrEqualAndLessThanMaxOrEqual(0)).toBe(true);
  expect(range.isGreaterThanMinOrEqualAndLessThanMaxOrEqual(10)).toBe(true);
});

test('isGreaterThanMinOrEqualAndLessThanMaxOrEqual should return false if value is not within [min, max]', () => {
  expect(range.isGreaterThanMinOrEqualAndLessThanMaxOrEqual(-5)).toBe(false);
  expect(range.isGreaterThanMinOrEqualAndLessThanMaxOrEqual(15)).toBe(false);
});

test('getIntersection should return null if ranges do not intersect', () => {
  const otherRangeValues: RangeValues = { min: 15, max: 20 };
  const intersection = range.getIntersection(otherRangeValues);
  expect(intersection).toBeNull();
});

test('getIntersection should return the intersection of two ranges', () => {
  const otherRangeValues: RangeValues = { min: 5, max: 15 };
  const intersection = range.getIntersection(otherRangeValues);
  expect(intersection?.getValues()).toEqual({ min: 5, max: 10 });
});

test('isInRangeOf should return true if the range is within another range', () => {
  const otherRangeValues: RangeValues = { min: -5, max: 20 };
  expect(range.isInRangeOf(otherRangeValues)).toBe(true);
});

test('isInRangeOf should return false if the range is not within another range', () => {
  const otherRangeValues: RangeValues = { min: 5, max: 15 };
  expect(range.isInRangeOf(otherRangeValues)).toBe(false);
});

test('containsRange should return true if the range contains another range', () => {
  const otherRangeValues: RangeValues = { min: 2, max: 8 };
  expect(range.containsRange(otherRangeValues)).toBe(true);
});

test('containsRange should return false if the range does not contain another range', () => {
  const otherRangeValues: RangeValues = { min: -2, max: 12 };
  expect(range.containsRange(otherRangeValues)).toBe(false);
});

test('should allow chaining multiple methods', () => {
  const intersection = range.getIntersection({ min: 2, max: 12 })

  expect(intersection?.getValues()).toEqual({ min: 2, max: 10 })
  expect(intersection?.isInRangeOf(range.getValues())).toBe(true)
});
