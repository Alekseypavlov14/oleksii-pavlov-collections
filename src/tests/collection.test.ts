import { Collection } from '../collection';

interface Entity {
  value: number;
}

let collection: Collection<Entity>;

beforeEach(() => {
  collection = new Collection([
    { value: 1 },
    { value: 3 },
    { value: 2 },
    { value: 5 },
    { value: 4 }
  ]);
});

test('getItems should return the items', () => {
  expect(collection.getItems()).toEqual([
    { value: 1 },
    { value: 3 },
    { value: 2 },
    { value: 5 },
    { value: 4 }
  ]);
});

test('getMaximumBy should return the maximum item by selector', () => {
  const maxItem = collection.getMaximumBy(item => item.value);
  expect(maxItem).toEqual({ value: 5 });
});

test('getMinimumBy should return the minimum item by selector', () => {
  const minItem = collection.getMinimumBy(item => item.value);
  expect(minItem).toEqual({ value: 1 });
});

test('filterByGreaterThan should filter items greater than a value by selector', () => {
  const filteredCollection = collection.filterByGreaterThan(item => item.value, 3);
  expect(filteredCollection.getItems()).toEqual([
    { value: 5 },
    { value: 4 }
  ]);
});

test('filterByGreaterOrEqualThan should filter items greater or equal to a value by selector', () => {
  const filteredCollection = collection.filterByGreaterOrEqualThan(item => item.value, 3);
  expect(filteredCollection.getItems()).toEqual([
    { value: 3 },
    { value: 5 },
    { value: 4 }
  ]);
});

test('filterByLessThan should filter items less than a value by selector', () => {
  const filteredCollection = collection.filterByLessThan(item => item.value, 3);
  expect(filteredCollection.getItems()).toEqual([
    { value: 1 },
    { value: 2 }
  ]);
});

test('filterByLessOrEqualThan should filter items less or equal to a value by selector', () => {
  const filteredCollection = collection.filterByLessOrEqualThan(item => item.value, 3);
  expect(filteredCollection.getItems()).toEqual([
    { value: 1 },
    { value: 3 },
    { value: 2 }
  ]);
});

test('sortAscendingBy should sort items in ascending order by selector', () => {
  const sortedCollection = collection.sortAscendingBy(item => item.value);
  expect(sortedCollection.getItems()).toEqual([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 }
  ]);
});

test('sortDescendingBy should sort items in descending order by selector', () => {
  const sortedCollection = collection.sortDescendingBy(item => item.value);
  expect(sortedCollection.getItems()).toEqual([
    { value: 5 },
    { value: 4 },
    { value: 3 },
    { value: 2 },
    { value: 1 }
  ]);
});
