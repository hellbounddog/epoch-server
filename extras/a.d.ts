declare class ArrayUtil {
  static clone: (input: any) => any;
  static shuffle: (arr: any[]) => any[];
  static sample: (arr: any[]) => any;
  static uniq: (arr: any[]) => any;
  static compact: (arr: any[]) => any[];
  static reverse: (arr: any[]) => any[];
  static union: (arr1: any[], arr2: any[]) => any[];
  static intersection: (arr1: any[], arr2: any[]) => any;
  static diff: (arr1: any[], arr2: any[]) => any;
  static flattenDeep: (array: Array<any>) => Array<any>;
  static flattenByDepth: (arr: any, depth?: number) => any;
  static last: (arr: any[]) => any;
  static findIndices: (arr: any[], item: any) => number[];
  static remove: (key: any, input: any) => any;
  /**
   * chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
   *
   * @param arr
   * @param size
   */
  static chunk: (arr: any, size: any) => any;
  /**
   * nthElement(['a', 'b', 'c'], 1); // 'b'
   * nthElement(['a', 'b', 'b'], -3); // 'a'
   *
   * @param arr
   * @param n
   */
  static nthElement: (arr: any, n?: number) => any;
}
//# sourceMappingURL=a.d.ts.map
