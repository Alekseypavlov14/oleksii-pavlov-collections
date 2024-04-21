export class Collection<T> {
  constructor(private readonly items: T[]) {}

  getItems(): T[] {
    return this.items
  }

  getMaximumBy(selector: (item: T) => number): T {
    let maximumItem: T = this.items[0]

    this.items.forEach(item => {
      if (selector(item) > selector(maximumItem)) maximumItem = item
    })

    return maximumItem
  }

  getMinimumBy(selector: (item: T) => number): T {
    let minimumItem: T = this.items[0]

    this.items.forEach(item => {
      if (selector(item) < selector(minimumItem)) minimumItem = item
    })

    return minimumItem
  }

  filterByGreaterThan(selector: (item: T) => number, value: number): Collection<T> {
    const filteredItems = this.items.filter(item => selector(item) > value)
    return new Collection(filteredItems)
  }

  filterByGreaterOrEqualThan(selector: (item: T) => number, value: number): Collection<T> {
    const filteredItems = this.items.filter(item => selector(item) >= value)
    return new Collection(filteredItems)
  }

  filterByLessThan(selector: (item: T) => number, value: number): Collection<T> {
    const filteredItems = this.items.filter(item => selector(item) < value)
    return new Collection(filteredItems)
  }

  filterByLessOrEqualThan(selector: (item: T) => number, value: number): Collection<T> {
    const filteredItems = this.items.filter(item => selector(item) <= value)
    return new Collection(filteredItems)
  }

  sortAscendingBy(selector: (item: T) => number): Collection<T> {
    const sortedItems = [...this.items].sort((a, b) => selector(a) - selector(b))
    return new Collection(sortedItems)
  }

  sortDescendingBy(selector: (item: T) => number): Collection<T> {
    const sortedItems = [...this.items].sort((a, b) => selector(b) - selector(a))
    return new Collection(sortedItems)
  }
}
