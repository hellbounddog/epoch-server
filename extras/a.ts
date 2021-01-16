class ArrayUtil {
  static clone = (input: any) => {
    if (input instanceof Array) {
      return [...input];
    }
    return {...input};
  };

  static shuffle = (arr: any[]) => {
    for (let i = arr.length; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
    }
    return arr;
  };

  static sample = (arr: any[]) => {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
  };

  static uniq = (arr: any[]) => Array.from(new Set([...arr]));

  // Removes null, empty, undefined, falsy values from list
  static compact = (arr: any[]) => arr.filter(Boolean);

  static reverse = (arr: any[]) => arr.reverse();

  static union = (arr1: any[], arr2: any[]) => [...new Set([...arr1, ...arr2])];

  static intersection = (arr1: any[], arr2: any[]) =>
    Array.from(new Set([...arr1].filter((x) => arr2.indexOf(x) >= 0)));

  static diff = (arr1: any[], arr2: any[]) => {
    const a = new Set(arr1);
    const b = new Set(arr2);
    return Array.from(new Set([...a].filter((x) => !b.has(x))));
  };

  static flattenDeep = (array: Array<any>): Array<any> => {
    const flattenedArray: Array<any> = [].concat(...array);
    return flattenedArray.some(Array.isArray)
      ? ArrayUtil.flattenDeep(flattenedArray)
      : flattenedArray;
  };

  static flattenByDepth = (arr, depth = 1) =>
    arr.reduce(
      (a, v) =>
        a.concat(
          depth > 1 && Array.isArray(v)
            ? ArrayUtil.flattenByDepth(v, depth - 1)
            : v,
        ),
      [],
    );

  static last = (arr: any[]) => arr[arr.length - 1];

  static findIndices = (arr: any[], item: any) => {
    const ret: number[] = [];
    for (const i in arr) {
      if (arr[i] === item) ret.push(+i);
    }
    return ret;
  };

  static remove = (key: any, input: any) => {
    if (input instanceof Array) {
      input.splice(input.indexOf(key), 1);
      return input.indexOf(key) < 0 ? input : ArrayUtil.remove(key, input);
    } else return ObjectUtil.remove(key, input);
  };

  /**
   * chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
   *
   * @param arr
   * @param size
   */
  static chunk = (arr, size) =>
    Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
      arr.slice(i * size, i * size + size),
    );

  /**
   * nthElement(['a', 'b', 'c'], 1); // 'b'
   * nthElement(['a', 'b', 'b'], -3); // 'a'
   *
   * @param arr
   * @param n
   */
  static nthElement = (arr, n = 0) =>
    (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];
}
