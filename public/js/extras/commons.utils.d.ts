declare class ValidationsUtils {
  static isValidEmail: (email: string) => boolean;
  static isValidUrl: (value: string) => boolean;
  static isValidImage: (value: string) => boolean;
  static isValidUSA_SSN(value: string): boolean;
  static isValidDate: (value: any, userFormat?: string) => any;
  static validateCreditCard: (cardnumber: string, cardtype?: string) => boolean;
  static isValidCreditCard: (type: string, ccnum: string) => boolean;
  static isValidCitizenId: (id: string, country: string) => boolean;
}
export declare class PromiseUtil {
  /**
   * const delay = promisify((d, cb) => setTimeout(cb, d));
   * delay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s
   *
   * @param func
   */
  static promisify: (func: any) => (...args: any[]) => Promise<unknown>;
}
export declare class Queue {
  dataholder: never[];
  constructor();
  peek(): null;
  add(data: any): void;
  size(): number;
  poll(): null;
  print(): void;
}
export declare class LimitedQueue extends Queue {
  private limit;
  constructor(limit: any);
  add(data: any): void;
}
export declare class LRUCache {
  max: number;
  cache: Map<any, any>;
  constructor(max?: number);
  get(key: any): any;
  put(key: any, val: any): void;
  first(): any;
  print(): void;
}
export declare const clone: (input: any) => any;
export declare const remove: (key: any, input: any) => any;
export declare const shuffle: (arr: any[]) => any[];
export declare const sample: (arr: any[]) => any;
export declare const uniq: (arr: any[]) => any[];
export declare const compact: (arr: any[]) => any[];
export declare const reverse: (arr: any[]) => any[];
export declare const union: (arr1: any[], arr2: any[]) => any[];
export declare const intersection: (arr1: any[], arr2: any[]) => any[];
export declare const diff: (arr1: any[], arr2: any[]) => any[];
export declare const flattenDeep: (array: Array<any>) => Array<any>;
export declare const flattenByDepth: (arr: any, depth?: number) => any;
export declare const last: (arr: any[]) => any;
export declare const findIndices: (arr: any[], item: any) => number[];
export declare const chunk: (arr: any, size: any) => any[];
export declare const nthElement: (arr: any, n?: number) => any;
export declare const camelCase: (text: string) => string;
export declare const pascalCase: (text: string) => string;
export declare const titleCase: (text: any) => any;
export declare const toggleCase: (text: any) => string;
export declare const swapCase: (text: string) => string;
export declare const dotCase: (text: string) => string;
export declare const kebabCase: (text: any) => any;
export declare const snakeCase: (text: any) => any;
export declare const truncateString: (str: any, num: any) => any;
export declare const random: {
  default: (min?: number, max?: number) => number;
  alphabetical: (length: number) => string;
  numerical: (length: number) => number;
  alphanumeric: (length: number) => string;
  color: (text: string, s?: number, l?: number) => string;
};
export declare const guid: (hyphen?: boolean) => string;
export declare const formatCurrency: (value: number) => string;
export declare const toCurrency: (
  n: any,
  curr: any,
  LanguageFormat?: undefined,
) => string;
export declare const isEmpty: (val: any) => boolean;
export declare const isInteger: (number: any) => boolean;
export declare const isNumber: (n: any) => boolean;
export declare const isJsonString: (a: string) => boolean;
export declare const isString: (a: any) => boolean;
export declare const removeHtmlTags: (a: string) => string;
export declare const escapeHTML: (str: any) => any;
export declare const unescapeHTML: (str: any) => any;
export declare const isLowerCase: (str: any) => boolean;
export declare const isUpperCase: (str: any) => boolean;
export declare const words: (text: string, pattern?: RegExp) => string[];
export declare const mask: (cc: any, num?: number, mask?: string) => string;
export declare const pad: (str: any, length: any, char?: string) => any;
export declare const removeNonASCII: (str: any) => any;
export declare const hexToRGB: (hex: any) => string;
export declare const RGBToHex: (r: any, g: any, b: any) => any;
export declare const extractURLs: (text: string) => string[];
export declare const extractPhones: (text: string) => string[];
export declare const extractEmails: (text: string) => string[];
export declare const extractPercent: (text: any) => string[];
export declare const extractNumbers: (text: string) => string[];
export declare const extractUSCurrencyAndNumbers: (text: any) => string[];
export declare const extractHyphenated: (text: string) => string[];
export declare const extractTime: (text: string) => string[];
export declare const extractDotted: (text: string) => string[];
export declare const extractQuoted: (text: string) => string[];
export declare const replaceAt: (
  text: string,
  char: string,
  index: number,
) => string;
export declare const removeAt: (text: string, index: number) => string;
export declare const size: (val: any) => any;
export declare const queryStringToObject: (query?: string) => {};
export declare const slugify: (text: any) => any;
export declare const average: (...nums: any[]) => number;
export declare const averageBy: (arr: any, fn: any) => number;
export declare const gcd: (...arr: any[]) => any;
export declare const lcm: (...arr: any[]) => any;
export declare const isPrime: (num: any) => boolean;
export declare const primes: (num: any) => number[];
export declare const isEven: (num: any) => boolean;
export declare const isOdd: (num: any) => boolean;
export declare const maxBy: (arr: any, fn: any) => number;
export declare const minBy: (arr: any, fn: any) => number;
export declare const sumBy: (arr: any, fn: any) => any;
export declare const median: (arr: any) => any;
export declare const percentile: (arr: any, val: any) => number;
export declare const toSafeInteger: (num: any) => number;
export declare const removeObject: (
  key: any,
  {
    [key]: remove,
    ...rest
  }: {
    [x: string]: any;
  },
) => {
  [x: string]: any;
};
export declare const safeparse: (item: any, defaultReturn?: any) => any;
export declare const isObject: (obj: any) => boolean;
export declare const isFunction: (val: any) => boolean;
export declare const isNil: (val: any) => boolean;
export declare const isPrimitive: (val: any) => boolean;
export declare const type: (v: any) => any;
export declare const lowercaseKeys: (obj: any) => {};
export declare const isValidEmail: (email: string) => boolean;
export declare const isValidUrl: (value: string) => boolean;
export declare const isValidImage: (value: string) => boolean;
export declare const isValidUSA_SSN: typeof ValidationsUtils.isValidUSA_SSN;
export declare const isValidDate: (value: any, userFormat?: string) => any;
export declare const isValidCreditCard: (
  type: string,
  ccnum: string,
) => boolean;
export declare const isValidCitizenId: (id: string, country: string) => boolean;
export declare const promisify: (
  func: any,
) => (...args: any[]) => Promise<unknown>;
export {};
//# sourceMappingURL=commons.utils.d.ts.map
