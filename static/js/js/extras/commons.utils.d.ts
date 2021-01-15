export var __esModule: boolean;
export class PromiseUtil {
}
export namespace PromiseUtil {
    function promisify(func: any): (...args: any[]) => Promise<any>;
}
export class Queue {
    dataholder: any[];
    peek(): any;
    add(data: any): void;
    size(): number;
    poll(): any;
    print(): void;
}
export class LimitedQueue extends Queue {
    constructor(limit: any);
    limit: any;
}
export class LRUCache {
    constructor(max?: number);
    max: number;
    cache: Map<any, any>;
    get(key: any): any;
    put(key: any, val: any): void;
    first(): any;
    print(): void;
}
export function clone(input: any): any;
export function remove(key: any, input: any): any;
export function shuffle(arr: any): any;
export function sample(arr: any): any;
export function uniq(arr: any): any[];
export function compact(arr: any): any;
export function reverse(arr: any): any;
export function union(arr1: any, arr2: any): any[];
export function intersection(arr1: any, arr2: any): any[];
export function diff(arr1: any, arr2: any): any[];
export function flattenDeep(array: any): any;
export function flattenByDepth(arr: any, depth?: number): any;
export function last(arr: any): any;
export function findIndices(arr: any, item: any): number[];
export function chunk(arr: any, size: any): any[];
export function nthElement(arr: any, n?: number): any;
export function camelCase(text: any): any;
export function pascalCase(text: any): any;
export function titleCase(text: any): any;
export function toggleCase(text: any): string;
export function swapCase(text: any): string;
export function dotCase(text: any): any;
export function kebabCase(text: any): any;
export function snakeCase(text: any): any;
export function truncateString(str: any, num: any): any;
export namespace random {
    function _default(min?: number, max?: number): number;
    export { _default as default };
    export function alphabetical(length: any): string;
    export function numerical(length: any): number;
    export function alphanumeric(length: any): string;
    export function color(text: any, s?: number, l?: number): string;
}
export function guid(hyphen?: boolean): string;
export function formatCurrency(value: any): string;
export function toCurrency(n: any, curr: any, LanguageFormat?: any): string;
export function isEmpty(val: any): boolean;
export function isInteger(number: any): boolean;
export function isNumber(n: any): boolean;
export function isJsonString(a: any): boolean;
export function isString(a: any): boolean;
export function removeHtmlTags(a: any): any;
export function escapeHTML(str: any): any;
export function unescapeHTML(str: any): any;
export function isLowerCase(str: any): boolean;
export function isUpperCase(str: any): boolean;
export function words(text: any, pattern?: RegExp): any;
export function mask(cc: any, num?: number, mask?: string): string;
export function pad(str: any, length: any, char?: string): any;
export function removeNonASCII(str: any): any;
export function hexToRGB(hex: any): string;
export function RGBToHex(r: any, g: any, b: any): any;
export function extractURLs(text: any): any;
export function extractPhones(text: any): any;
export function extractEmails(text: any): any;
export function extractPercent(text: any): any;
export function extractNumbers(text: any): any;
export function extractUSCurrencyAndNumbers(text: any): any;
export function extractHyphenated(text: any): any;
export function extractTime(text: any): any;
export function extractDotted(text: any): any;
export function extractQuoted(text: any): any;
export function replaceAt(text: any, char: any, index: any): any;
export function removeAt(text: any, index: any): any;
export function size(val: any): any;
export function queryStringToObject(query?: string): {};
export function slugify(text: any): any;
export function average(...nums: any[]): number;
export function averageBy(arr: any, fn: any): number;
export function gcd(...arr: any[]): any;
export function lcm(...arr: any[]): any;
export function isPrime(num: any): boolean;
export function primes(num: any): number[];
export function isEven(num: any): boolean;
export function isOdd(num: any): boolean;
export function maxBy(arr: any, fn: any): number;
export function minBy(arr: any, fn: any): number;
export function sumBy(arr: any, fn: any): any;
export function median(arr: any): any;
export function percentile(arr: any, val: any): number;
export function toSafeInteger(num: any): number;
export function remove(key: any, _a: any): any;
export function safeparse(item: any, defaultReturn: any): any;
export function isObject(obj: any): boolean;
export function isFunction(val: any): boolean;
export function isNil(val: any): boolean;
export function isPrimitive(val: any): boolean;
declare function objectType(v: any): any;
export function lowercaseKeys(obj: any): {};
export function isValidEmail(email: any): boolean;
export function isValidUrl(value: any): boolean;
export function isValidImage(value: any): boolean;
export function isValidUSA_SSN(value: any): boolean;
export function isValidDate(value: any, userFormat?: string): any;
export function isValidCreditCard(type: any, ccnum: any): boolean;
export function isValidCitizenId(id: any, country: any): boolean;
export { remove as removeObject, objectType as type, promisify };
//# sourceMappingURL=commons.utils.d.ts.map