# Collections

## Introduction

This npm package provides two classes, `Collection` and `Range`, designed to facilitate common operations on collections of data and ranges of values, respectively. These classes offer a variety of methods for manipulating and querying data, making it easier to work with collections and ranges in JavaScript and TypeScript applications.

## Installation

You can install the package via npm by running the following command:

```bash
npm i @oleksii-pavlov/collections
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

### Range Class

The `Range` class represents a range of values and provides methods for working with ranges. Here's how you can use it:

```typescript
import { Range } from '@oleksii-pavlov/collections';

// Create a range
const range = new Range({ min: 0, max: 10 });

// Check if a value is within the range
console.log(range.isGreaterThanMinAndLessThanMax(5)); // true
console.log(range.isGreaterThanMinAndLessThanMax(15)); // false

// Get the intersection of two ranges
const otherRangeValues = { min: 5, max: 15 };
const intersection = range.getIntersection(otherRangeValues);
console.log(intersection); // { min: 5, max: 10 }
```