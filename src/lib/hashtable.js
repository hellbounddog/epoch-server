class HashTable {
  private hashTable: Array<T>;

  constructor(private hashSize = 137) {
    this.hashTable = new Array(hashSize);
  }

  public add(value: string) {
    const hash = this.hash(value);

    if (this.hashTable[hash]) {
      while (!this.hashTable[hash] && hash <= this.hashSize) {
        hash++;
      }
    }

    if (hash) {
      this.hashTable[hash] = value;
    }
  }

  public get(value: string): string {
    const hash = this.hash(value);

    if (this.hashTable[hash] !== value) {
      while (!this.hashTable[hash] && hash <= this.hashSize) {
        hash++;
      }
    }

    return this.hashTable[hash] ? this.hashTable[hash] : undefined;
  }

  private hash(value: string): number {
    const salt = 37;

    let aggregateHash = value
      .split('')
      .map((v) => v.charCodeAt())
      .reduce((accumulator, v) => {
        console.log(accumulator);
        return salt * accumulator + v;
      });

    aggregateHash = aggregateHash % this.hashSize;

    return parseInt(aggregateHash);
  }
}
