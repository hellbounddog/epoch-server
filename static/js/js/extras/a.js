"use strict";
class ArrayUtil {
}
ArrayUtil.clone = (input) => {
    if (input instanceof Array) {
        return [...input];
    }
    return Object.assign({}, input);
};
ArrayUtil.shuffle = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
    }
    return arr;
};
ArrayUtil.sample = (arr) => {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
};
ArrayUtil.uniq = (arr) => Array.from(new Set([...arr]));
// Removes null, empty, undefined, falsy values from list
ArrayUtil.compact = (arr) => arr.filter(Boolean);
ArrayUtil.reverse = (arr) => arr.reverse();
ArrayUtil.union = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
ArrayUtil.intersection = (arr1, arr2) => Array.from(new Set([...arr1].filter(x => arr2.indexOf(x) >= 0)));
ArrayUtil.diff = (arr1, arr2) => {
    const a = new Set(arr1);
    const b = new Set(arr2);
    return Array.from(new Set([...a].filter(x => !b.has(x))));
};
ArrayUtil.flattenDeep = (array) => {
    const flattenedArray = [].concat(...array);
    return flattenedArray.some(Array.isArray) ? ArrayUtil.flattenDeep(flattenedArray) : flattenedArray;
};
ArrayUtil.flattenByDepth = (arr, depth = 1) => arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? ArrayUtil.flattenByDepth(v, depth - 1) : v), []);
ArrayUtil.last = (arr) => arr[arr.length - 1];
ArrayUtil.findIndices = (arr, item) => {
    const ret = [];
    for (const i in arr) {
        if (arr[i] === item)
            ret.push(+i);
    }
    return ret;
};
ArrayUtil.remove = (key, input) => {
    if (input instanceof Array) {
        input.splice(input.indexOf(key), 1);
        return input.indexOf(key) < 0 ? input : ArrayUtil.remove(key, input);
    }
    else
        return ObjectUtil.remove(key, input);
};
/**
 * chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
 *
 * @param arr
 * @param size
 */
ArrayUtil.chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
/**
 * nthElement(['a', 'b', 'c'], 1); // 'b'
 * nthElement(['a', 'b', 'b'], -3); // 'a'
 *
 * @param arr
 * @param n
 */
ArrayUtil.nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];
//# sourceMappingURL=a.js.map