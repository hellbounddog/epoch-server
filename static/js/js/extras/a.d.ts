declare class ArrayUtil {
    static clone: (input: any) => any;
    static shuffle: (arr: any[]) => any[];
    static sample: (arr: any[]) => any;
    static uniq: (arr: any[]) => any[];
    static compact: (arr: any[]) => any[];
    static reverse: (arr: any[]) => any[];
    static union: (arr1: any[], arr2: any[]) => any[];
    static intersection: (arr1: any[], arr2: any[]) => any[];
    static diff: (arr1: any[], arr2: any[]) => any[];
    static flattenDeep: (array: any[]) => any[];
    static flattenByDepth: (arr: any, depth?: number) => any;
    static last: (arr: any[]) => any;
    static findIndices: (arr: any[], item: any) => number[];
    static remove: (key: any, input: any) => any;
    static chunk: (arr: any, size: any) => any[];
    static nthElement: (arr: any, n?: number) => any;
}
declare namespace ArrayUtil {
    function clone(input: any): any;
    function shuffle(arr: any): any;
    function sample(arr: any): any;
    function uniq(arr: any): any[];
    function compact(arr: any): any;
    function reverse(arr: any): any;
    function union(arr1: any, arr2: any): any[];
    function intersection(arr1: any, arr2: any): any[];
    function diff(arr1: any, arr2: any): any[];
    function flattenDeep(array: any): any[];
    function flattenByDepth(arr: any, depth?: number): any;
    function last(arr: any): any;
    function findIndices(arr: any, item: any): number[];
    function remove(key: any, input: any): any;
    function chunk(arr: any, size: any): any[];
    function nthElement(arr: any, n?: number): any;
}
//# sourceMappingURL=a.d.ts.map