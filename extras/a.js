'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (const p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
const __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (let a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
const ArrayUtil = /** @class */ (function () {
  function ArrayUtil() {}
  ArrayUtil.clone = function (input) {
    if (input instanceof Array) {
      return __spreadArrays(input);
    }
    return __assign({}, input);
  };
  ArrayUtil.shuffle = function (arr) {
    let _a;
    for (let i = arr.length; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      (_a = [arr[j], arr[i - 1]]), (arr[i - 1] = _a[0]), (arr[j] = _a[1]);
    }
    return arr;
  };
  ArrayUtil.sample = function (arr) {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
  };
  ArrayUtil.uniq = function (arr) {
    return Array.from(new Set(__spreadArrays(arr)));
  };
  // Removes null, empty, undefined, falsy values from list
  ArrayUtil.compact = function (arr) {
    return arr.filter(Boolean);
  };
  ArrayUtil.reverse = function (arr) {
    return arr.reverse();
  };
  ArrayUtil.union = function (arr1, arr2) {
    return __spreadArrays(new Set(__spreadArrays(arr1, arr2)));
  };
  ArrayUtil.intersection = function (arr1, arr2) {
    return Array.from(
      new Set(
        __spreadArrays(arr1).filter((x) => {
          return arr2.indexOf(x) >= 0;
        }),
      ),
    );
  };
  ArrayUtil.diff = function (arr1, arr2) {
    const a = new Set(arr1);
    const b = new Set(arr2);
    return Array.from(
      new Set(
        __spreadArrays(a).filter((x) => {
          return !b.has(x);
        }),
      ),
    );
  };
  ArrayUtil.flattenDeep = function (array) {
    const flattenedArray = [].concat.apply([], array);
    return flattenedArray.some(Array.isArray)
      ? ArrayUtil.flattenDeep(flattenedArray)
      : flattenedArray;
  };
  ArrayUtil.flattenByDepth = function (arr, depth) {
    if (depth === void 0) {
      depth = 1;
    }
    return arr.reduce((a, v) => {
      return a.concat(
        depth > 1 && Array.isArray(v)
          ? ArrayUtil.flattenByDepth(v, depth - 1)
          : v,
      );
    }, []);
  };
  ArrayUtil.last = function (arr) {
    return arr[arr.length - 1];
  };
  ArrayUtil.findIndices = function (arr, item) {
    const ret = [];
    for (const i in arr) {
      if (arr[i] === item) ret.push(+i);
    }
    return ret;
  };
  ArrayUtil.remove = function (key, input) {
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
  ArrayUtil.chunk = function (arr, size) {
    return Array.from({length: Math.ceil(arr.length / size)}, (v, i) => {
      return arr.slice(i * size, i * size + size);
    });
  };
  /**
   * nthElement(['a', 'b', 'c'], 1); // 'b'
   * nthElement(['a', 'b', 'b'], -3); // 'a'
   *
   * @param arr
   * @param n
   */
  ArrayUtil.nthElement = function (arr, n) {
    if (n === void 0) {
      n = 0;
    }
    return (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];
  };
  return ArrayUtil;
})();
//# sourceMappingURL=a.js.map
