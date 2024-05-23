# Collections

## Introduction

This npm package provides a `Collection` class designed to facilitate common operations on collections of data. The `Collection` class offers a variety of methods for manipulating and querying data, making it easier to work with collections in JavaScript and TypeScript applications.

## Installation

You can install the package via npm by running the following command:

```bash
npm install @oleksii-pavlov/collections
```

## Usage

### Collection Class

The `Collection` class provides methods for working with collections of data. Here's how you can use it:

```typescript
import { Collection } from '@oleksii-pavlov/collections';

// Define the book entity interface
interface Book {
  name: string;
  price: number;
}

// Create a collection of books
const books: Book[] = [
  { name: 'Book A', price: 20 },
  { name: 'Book B', price: 15 },
  { name: 'Book C', price: 25 },
];

// Initialize the collection
const bookCollection = new Collection(books);

// Get the items in the collection
const bookItems = bookCollection.getItems();
console.log(bookItems);
// Output: [
//   { name: 'Book A', price: 20 },
//   { name: 'Book B', price: 15 },
//   { name: 'Book C', price: 25 }
// ]

// Find the most expensive book
const mostExpensiveBook = bookCollection.getMaximumBy(book => book.price);
console.log(mostExpensiveBook);
// Output: { name: 'Book C', price: 25 }

// Filter books with price greater than a certain value
const expensiveBooks = bookCollection.filterByGreaterThan(book => book.price, 20);
console.log(expensiveBooks.getItems());
// Output: [
//   { name: 'Book A', price: 20 },
//   { name: 'Book C', price: 25 }
// ]

// Sort books by price in ascending order
const sortedBooks = bookCollection.sortAscendingBy(book => book.price);
console.log(sortedBooks.getItems());
// Output: [
//   { name: 'Book B', price: 15 },
//   { name: 'Book A', price: 20 },
//   { name: 'Book C', price: 25 }
// ]
```

## API Reference

### Collection Class

#### Constructor

```typescript
constructor(items: T[])
```

Initializes a `Collection` instance with the specified array of items.

#### Methods

##### `getItems()`

```typescript
getItems(): T[]
```

Returns the array of items in the collection.

##### `getMaximumBy(selector: (item: T) => number): T | null`

```typescript
getMaximumBy(selector: (item: T) => number): T | null
```

Finds and returns the item with the maximum value determined by the selector function. If the collection is empty, it returns `null`.

##### `filterByGreaterThan(selector: (item: T) => number, threshold: number): Collection<T>`

```typescript
filterByGreaterThan(selector: (item: T) => number, threshold: number): Collection<T>
```

Filters the items in the collection, returning a new `Collection` instance containing items where the value selected by the selector function is greater than the specified threshold.

##### `sortAscendingBy(selector: (item: T) => number): Collection<T>`

```typescript
sortAscendingBy(selector: (item: T) => number): Collection<T>
```

Sorts the items in the collection in ascending order based on the value determined by the selector function, returning a new `Collection` instance with the sorted items.

## Examples

### Initializing a Collection

```typescript
import { Collection } from '@oleksii-pavlov/collections';

interface Book {
  name: string;
  price: number;
}

const books: Book[] = [
  { name: 'Book A', price: 20 },
  { name: 'Book B', price: 15 },
  { name: 'Book C', price: 25 },
];

const bookCollection = new Collection(books);
```

### Getting Items from a Collection

```typescript
const bookItems = bookCollection.getItems();
console.log(bookItems);
// Output: [
//   { name: 'Book A', price: 20 },
//   { name: 'Book B', price: 15 },
//   { name: 'Book C', price: 25 }
// ]
```

### Finding the Item with the Maximum Value

```typescript
const mostExpensiveBook = bookCollection.getMaximumBy(book => book.price);
console.log(mostExpensiveBook);
// Output: { name: 'Book C', price: 25 }
```

### Filtering Items by a Threshold

```typescript
const expensiveBooks = bookCollection.filterByGreaterThan(book => book.price, 20);
console.log(expensiveBooks.getItems());
// Output: [
//   { name: 'Book A', price: 20 },
//   { name: 'Book C', price: 25 }
// ]
```

### Sorting Items in Ascending Order

```typescript
const sortedBooks = bookCollection.sortAscendingBy(book => book.price);
console.log(sortedBooks.getItems());
// Output: [
//   { name: 'Book B', price: 15 },
//   { name: 'Book A', price: 20 },
//   { name: 'Book C', price: 25 }
// ]
```