"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractURLs = exports.RGBToHex = exports.hexToRGB = exports.removeNonASCII = exports.pad = exports.mask = exports.words = exports.isUpperCase = exports.isLowerCase = exports.unescapeHTML = exports.escapeHTML = exports.removeHtmlTags = exports.isString = exports.isJsonString = exports.isNumber = exports.isInteger = exports.isEmpty = exports.toCurrency = exports.formatCurrency = exports.guid = exports.random = exports.truncateString = exports.snakeCase = exports.kebabCase = exports.dotCase = exports.swapCase = exports.toggleCase = exports.titleCase = exports.pascalCase = exports.camelCase = exports.nthElement = exports.chunk = exports.findIndices = exports.last = exports.flattenByDepth = exports.flattenDeep = exports.diff = exports.intersection = exports.union = exports.reverse = exports.compact = exports.uniq = exports.sample = exports.shuffle = exports.remove = exports.clone = exports.LRUCache = exports.LimitedQueue = exports.Queue = exports.PromiseUtil = void 0;
exports.promisify = exports.isValidCitizenId = exports.isValidCreditCard = exports.isValidDate = exports.isValidUSA_SSN = exports.isValidImage = exports.isValidUrl = exports.isValidEmail = exports.lowercaseKeys = exports.type = exports.isPrimitive = exports.isNil = exports.isFunction = exports.isObject = exports.safeparse = exports.removeObject = exports.toSafeInteger = exports.percentile = exports.median = exports.sumBy = exports.minBy = exports.maxBy = exports.isOdd = exports.isEven = exports.primes = exports.isPrime = exports.lcm = exports.gcd = exports.averageBy = exports.average = exports.slugify = exports.queryStringToObject = exports.size = exports.removeAt = exports.replaceAt = exports.extractQuoted = exports.extractDotted = exports.extractTime = exports.extractHyphenated = exports.extractUSCurrencyAndNumbers = exports.extractNumbers = exports.extractPercent = exports.extractEmails = exports.extractPhones = void 0;
var ArraysUtils = /** @class */ (function () {
    function ArraysUtils() {
    }
    ArraysUtils.clone = function (input) {
        if (input instanceof Array) {
            return __spreadArrays(input);
        }
        return __assign({}, input);
    };
    ArraysUtils.shuffle = function (arr) {
        var _a;
        for (var i = arr.length; i > 0; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [arr[j], arr[i - 1]], arr[i - 1] = _a[0], arr[j] = _a[1];
        }
        return arr;
    };
    ArraysUtils.sample = function (arr) {
        return arr[Math.floor(Math.random() * (arr.length - 1))];
    };
    ArraysUtils.uniq = function (arr) { return Array.from(new Set(__spreadArrays(arr))); };
    // Removes null, empty, undefined, falsy values from list
    ArraysUtils.compact = function (arr) { return arr.filter(Boolean); };
    ArraysUtils.reverse = function (arr) { return arr.reverse(); };
    ArraysUtils.union = function (arr1, arr2) { return __spreadArrays(new Set(__spreadArrays(arr1, arr2))); };
    ArraysUtils.intersection = function (arr1, arr2) { return Array.from(new Set(__spreadArrays(arr1).filter(function (x) { return arr2.indexOf(x) >= 0; }))); };
    ArraysUtils.diff = function (arr1, arr2) {
        var a = new Set(arr1);
        var b = new Set(arr2);
        return Array.from(new Set(__spreadArrays(a).filter(function (x) { return !b.has(x); })));
    };
    ArraysUtils.flattenDeep = function (array) {
        var flattenedArray = [].concat.apply([], array);
        return flattenedArray.some(Array.isArray) ? ArraysUtils.flattenDeep(flattenedArray) : flattenedArray;
    };
    ArraysUtils.flattenByDepth = function (arr, depth) {
        if (depth === void 0) { depth = 1; }
        return arr.reduce(function (a, v) { return a.concat(depth > 1 && Array.isArray(v) ? ArraysUtils.flattenByDepth(v, depth - 1) : v); }, []);
    };
    ArraysUtils.last = function (arr) { return arr[arr.length - 1]; };
    ArraysUtils.findIndices = function (arr, item) {
        var ret = [];
        for (var i in arr) {
            if (arr[i] === item)
                ret.push(+i);
        }
        return ret;
    };
    ArraysUtils.remove = function (key, input) {
        if (input instanceof Array) {
            input.splice(input.indexOf(key), 1);
            return input.indexOf(key) < 0 ? input : ArraysUtils.remove(key, input);
        }
        else
            return ObjectsUtils.remove(key, input);
    };
    /**
     * chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
     *
     * @param arr
     * @param size
     */
    ArraysUtils.chunk = function (arr, size) { return Array.from({ length: Math.ceil(arr.length / size) }, function (v, i) {
        return arr.slice(i * size, i * size + size);
    }); };
    /**
     * nthElement(['a', 'b', 'c'], 1); // 'b'
     * nthElement(['a', 'b', 'b'], -3); // 'a'
     *
     * @param arr
     * @param n
     */
    ArraysUtils.nthElement = function (arr, n) {
        if (n === void 0) { n = 0; }
        return (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];
    };
    return ArraysUtils;
}());
var ObjectsUtils = /** @class */ (function () {
    function ObjectsUtils() {
    }
    ObjectsUtils.remove = function (key, _a) {
        var _b = key, remove = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        return rest;
    };
    ObjectsUtils.isEmpty = function (obj) {
        if (obj === void 0) { obj = {}; }
        return Object.getOwnPropertyNames(obj).length === 0;
    };
    ObjectsUtils.safeparse = function (item, defaultReturn) {
        try {
            return JSON.parse(item);
        }
        catch (e) {
            return defaultReturn;
        }
    };
    /**
     * is(Array, [1]); // true
     * is(ArrayBuffer, new ArrayBuffer()); // true
     * is(Map, new Map()); // true
     * is(RegExp, /./g); // true
     * is(Set, new Set()); // true
     * is(WeakMap, new WeakMap()); // true
     * is(WeakSet, new WeakSet()); // true
     * is(String, ''); // true
     * is(String, new String('')); // true
     * is(Number, 1); // true
     * is(Number, new Number(1)); // true
     * is(Boolean, true); // true
     * is(Boolean, new Boolean(true)); // true
     *
     * @param type
     * @param val
     */
    ObjectsUtils.is = function (type, val) { return ![, null].includes(val) && val.constructor === type; };
    ObjectsUtils.isObject = function (obj) { return !!obj && obj.constructor === {}.constructor; };
    ObjectsUtils.isFunction = function (val) { return typeof val === 'function'; };
    ObjectsUtils.objectType1 = function (obj) {
        try {
            var op = Object.prototype.toString.call(obj);
            return op.replace(/\[|object|\]| /g, '');
        }
        catch (_a) {
            return undefined;
        }
    };
    /**
     * isNil(null); // true
     * isNil(undefined); // true
     *
     * @param val
     */
    ObjectsUtils.isNil = function (val) { return val === undefined || val === null; };
    /**
     * isPrimitive(null); // true
     * isPrimitive(50); // true
     * isPrimitive('Hello!'); // true
     * isPrimitive(false); // true
     * isPrimitive(Symbol()); // true
     * isPrimitive([]); // false
     *
     * @param val
     */
    ObjectsUtils.isPrimitive = function (val) { return !['object', 'function'].includes(typeof val) || val === null; };
    ObjectsUtils.objectType = function (v) { return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase(); };
    /**
     * lowercaseKeys({NAME: 'Pujan}) --> {name: 'Pujan}
     * @param obj
     */
    ObjectsUtils.lowercaseKeys = function (obj) {
        return Object.keys(obj).reduce(function (acc, key) {
            acc[key.toLowerCase()] = obj[key];
            return acc;
        }, {});
    };
    return ObjectsUtils;
}());
var StringsUtils = /** @class */ (function () {
    function StringsUtils() {
    }
    /**
     * hello javascript => helloJavascript
     *
     * @param text
     */
    StringsUtils.camelCase = function (text) { return text.replace(/\s(.)/g, function ($1) { return $1.toUpperCase(); }).replace(/\s/g, ''); };
    /**
     * hello javascript => HelloJavascript
     *
     * @param text
     */
    StringsUtils.pascalCase = function (text) { return text.replace(/(\w)(\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }).replace(/\s/g, ''); };
    /**
     * hello javascript => Hello Javascript
     *
     * @param string
     */
    StringsUtils.titleCase = function (text) { return text.split(' ').map(function (w) { return w.charAt(0).toUpperCase() + w.substr(1, w.length - 1); }).join(' '); };
    /**
     * Hello => hELLO
     *
     * @param text
     */
    StringsUtils.toggleCase = function (text) { return __spreadArrays(text).map(function (c) { return c.charCodeAt(0) <= 90 ? c.toLowerCase() : c.toUpperCase(); }).join(''); };
    StringsUtils.swapCase = function (text) { return StringsUtils.toggleCase(text); };
    /**
     * 1. space is replaced with dot
     * 2. Capitalize letter is replaced with dot and small letter of that letter
     * 3. multiple dots can not come together
     * 4. lowercase everything
     *
     * @param text
     */
    StringsUtils.dotCase = function (text) {
        text = text.replace(/\s/g, '.');
        text = __spreadArrays(text).map(function (w) { return w.charCodeAt(0) <= 90 ? '.' + w.toLowerCase() : w; }).join('').replace(/\.+/g, '.');
        return text;
    };
    /**
     * toKebabCase('camelCase'); // 'camel-case'
     * toKebabCase('some text'); // 'some-text'
     *
     * @param text
     */
    StringsUtils.kebabCase = function (text) { return text && text
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(function (x) { return x.toLowerCase(); })
        .join('-'); };
    /**
     * toSnakeCase('camelCase'); // 'camel_case'
     * toSnakeCase('some text'); // 'some_text'
     *
     * @param text
     */
    StringsUtils.snakeCase = function (text) { return text && text
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(function (x) { return x.toLowerCase(); })
        .join('_'); };
    /**
     * truncateString('boomerang', 7); // 'boom...'
     *
     * @param str
     * @param num
     */
    StringsUtils.truncateString = function (str, num) { return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str; };
    StringsUtils.random = {
        default: function (min, max) {
            if (min === void 0) { min = 0; }
            if (max === void 0) { max = 100; }
            if (min >= 0 && max <= 1)
                return +(Math.random() * (0.00 - 1.00) + 1.00).toFixed(2);
            return ~~(Math.random() * (max - min + 1)) + min;
        },
        alphabetical: function (length) {
            var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            return Array.from({ length: length }).map(function (i) { return chars[~~(Math.random() * chars.length)]; }).join("");
        },
        numerical: function (length) {
            var chars = '0123456789';
            var result = '';
            for (var i = length; i > 0; --i)
                result += chars[Math.floor(Math.random() * chars.length)];
            while (result.startsWith("0")) {
                result = chars[Math.floor(Math.random() * chars.length)] + result.substring(1, result.length);
            }
            return +result;
        },
        alphanumeric: function (length) {
            var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
            return Array.from({ length: length }).map(function (i) { return chars[~~(Math.random() * chars.length)]; }).join("");
        },
        color: function (text, s, l) {
            if (s === void 0) { s = 60; }
            if (l === void 0) { l = 70; }
            if (!text)
                return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
            var hash = 0;
            for (var i = 0; i < text.length; i++) {
                hash = text.charCodeAt(i) + ((hash << 5) - hash);
            }
            var h = hash % 360;
            return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
        }
    };
    StringsUtils.isEmpty1 = function (a) {
        if (!exports.isString(a))
            return ObjectsUtils.isEmpty(a);
        if (!a || a.length === 0 || a === "" || typeof a === "undefined" || !/[^\s]/.test(a) || /^\s*$/.test(a) || a.replace(/\s/g, "") === "") {
            return true;
        }
        return false;
    };
    StringsUtils.isEmpty = function (val) { return val == null || !(Object.keys(val) || val).length; };
    StringsUtils.isString = function (a) {
        if (a === undefined || a === null) {
            return false;
        }
        return typeof a === 'string' || a instanceof String;
    };
    StringsUtils.isJsonString = function (a) {
        if (!StringsUtils.isString(a))
            return false;
        try {
            JSON.parse(a);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    StringsUtils.isInteger = function (number) { return (number ^ 0) === number; };
    StringsUtils.isNumber = function (n) { return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n; };
    StringsUtils.size1 = function (item) {
        if (item === null)
            return 0;
        if (Array.isArray(item))
            return item.length;
        return Object.keys(item).length;
    };
    StringsUtils.size = function (val) {
        return Array.isArray(val)
            ? val.length
            : val && typeof val === 'object'
                ? val.size || val.length || Object.keys(val).length
                : typeof val === 'string'
                    ? new Blob([val]).size
                    : 0;
    };
    StringsUtils.queryStringToObject = function (query) {
        if (query === void 0) { query = window.location.search.substring(1); }
        if (query.startsWith('?'))
            query = query.substr(1);
        var query_string = {};
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
            }
            else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                query_string[pair[0]] = arr;
            }
            else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    };
    StringsUtils.removeHtmlTags = function (a) {
        return a.replace(/(<([^>]+)>)/ig, "");
    };
    StringsUtils.escapeHTML = function (str) {
        return str.replace(/[&<>'"]/g, function (tag) {
            return ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag);
        });
    };
    StringsUtils.unescapeHTML = function (str) {
        return str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, function (tag) {
            return ({
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&#39;': "'",
                '&quot;': '"'
            }[tag] || tag);
        });
    };
    StringsUtils.slugify = function (text) {
        var a = 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
        var b = 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
        var p = new RegExp(a.split('').join('|'), 'g');
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(p, function (c) { return b.charAt(a.indexOf(c)); })
            .replace(/&/g, '-and-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };
    StringsUtils.formatCurrency = function (value) {
        return parseFloat('' + value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };
    /**
     * toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
     * toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
     * toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
     * toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
     * toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
     *
     * @param n
     * @param curr
     * @param LanguageFormat
     */
    StringsUtils.toCurrency = function (n, curr, LanguageFormat) {
        if (LanguageFormat === void 0) { LanguageFormat = undefined; }
        return Intl.NumberFormat(LanguageFormat, {
            style: 'currency',
            currency: curr
        }).format(n);
    };
    StringsUtils.guid = function (hyphen) {
        if (hyphen === void 0) { hyphen = false; }
        var hyphenChar = hyphen ? '-' : '';
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + hyphenChar + s4() + hyphenChar + s4() + hyphenChar + s4() + hyphenChar + s4() + s4() + s4();
    };
    StringsUtils.extractURLs = function (text) {
        return text.match(/(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?/gi) || [];
    };
    StringsUtils.extractPhones = function (text) {
        return text.match(/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/gi) || [];
    };
    StringsUtils.extractEmails = function (text) {
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi) || [];
    };
    StringsUtils.extractPercent = function (text) {
        return text.match(/\d+\%/gi) || [];
    };
    StringsUtils.extractNumbers = function (text) {
        return text.match(/\d+/gi) || [];
    };
    StringsUtils.extractUSCurrencyAndNumbers = function (text) {
        return text.match(/\$?([\d,\.]+)\d(?!%)(?!:)/gi) || [];
    };
    StringsUtils.extractHyphenated = function (text) {
        return text.match(/([a-zA-Z0-9]+-){1,}[a-zA-Z0-9]+/gi) || [];
    };
    StringsUtils.extractTime = function (text) {
        return text.match(/([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/gi) || [];
    };
    StringsUtils.extractDotted = function (text) {
        return text.match(/(?:[a-zA-Z]\.){1,}[a-zA-Z]?/gi) || [];
    };
    StringsUtils.extractQuoted = function (text) {
        return text.match(/"([^"]+)"/g) || [];
    };
    StringsUtils.isLowerCase = function (str) { return str === str.toLowerCase(); };
    StringsUtils.isUpperCase = function (str) { return str === str.toUpperCase(); };
    StringsUtils.words = function (text, pattern) {
        if (pattern === void 0) { pattern = /[^a-zA-Z-]+/; }
        return text.split(pattern).filter(Boolean);
    };
    /**
     * mask('1234567890',3,'*') --> *******890
     *
     * @param cc
     * @param num
     * @param mask
     */
    StringsUtils.mask = function (cc, num, mask) {
        if (num === void 0) { num = 4; }
        if (mask === void 0) { mask = '*'; }
        return ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);
    };
    /**
     * pad('cat', 8); // '  cat   '
     pad(String(42), 6, '0'); // '004200'
     pad('foobar', 3); // 'foobar'

     * @param str
     * @param length
     * @param char
     */
    StringsUtils.pad = function (str, length, char) {
        if (char === void 0) { char = ' '; }
        return str.padStart((str.length + length) / 2, char).padEnd(length, char);
    };
    /**
     * removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'
     *
     * @param str
     */
    StringsUtils.removeNonASCII = function (str) { return str.replace(/[^\x20-\x7E]/g, ''); };
    StringsUtils.hexToRGB = function (hex) {
        var alpha = false, h = hex.slice(hex.startsWith('#') ? 1 : 0);
        if (h.length === 3)
            h = __spreadArrays(h).map(function (x) { return x + x; }).join('');
        else if (h.length === 8)
            alpha = true;
        h = parseInt(h, 16);
        return ('rgb' +
            (alpha ? 'a' : '') +
            '(' +
            (h >>> (alpha ? 24 : 16)) +
            ', ' +
            ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
            ', ' +
            ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
            (alpha ? ", " + (h & 0x000000ff) : '') +
            ')');
    };
    StringsUtils.RGBToHex = function (r, g, b) { return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0'); };
    /**
     * Replace text at particular index with char;
     *
     * @param text
     * @param char
     * @param index
     */
    StringsUtils.replaceAt = function (text, char, index) {
        if (index < 0)
            return text;
        return text.substr(0, index) + char + text.substr(index + 1);
    };
    /**
     * Remove text at index
     *
     * @param text
     * @param index
     */
    StringsUtils.removeAt = function (text, index) {
        if (index < 0)
            return text;
        return text.substr(0, index) + text.substr(index + 1);
    };
    return StringsUtils;
}());
var MathsUtils = /** @class */ (function () {
    function MathsUtils() {
    }
    MathsUtils.average = function () {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        return nums.reduce(function (acc, val) { return acc + val; }, 0) / nums.length;
    };
    /**
     * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
     *
     * @param arr
     * @param fn
     */
    MathsUtils.averageBy = function (arr, fn) { return arr.map(typeof fn === 'function' ? fn : function (val) { return val[fn]; }).reduce(function (acc, val) { return acc + val; }, 0) / arr.length; };
    /**
     * gcd(12,18) => 6
     *
     * @param arr
     */
    MathsUtils.gcd = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        var _gcd = function (x, y) { return (!y ? x : exports.gcd(y, x % y)); };
        return __spreadArrays(arr).reduce(function (a, b) { return _gcd(a, b); });
    };
    /**
     * lcm(12, 5); --> 60
     * lcm(...[1,2,3,4]) --> 12
     *
     * @param arr
     */
    MathsUtils.lcm = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        var gcd = function (x, y) { return (!y ? x : gcd(y, x % y)); };
        var _lcm = function (x, y) { return (x * y) / gcd(x, y); };
        return __spreadArrays(arr).reduce(function (a, b) { return _lcm(a, b); });
    };
    MathsUtils.isPrime = function (num) {
        var boundary = Math.floor(Math.sqrt(num));
        for (var i = 2; i <= boundary; i++)
            if (num % i === 0)
                return false;
        return num >= 2;
    };
    MathsUtils.primes = function (num) {
        var arr = Array.from({ length: num - 1 }).map(function (x, i) { return i + 2; }), sqroot = Math.floor(Math.sqrt(num)), numsTillSqroot = Array.from({ length: sqroot - 1 }).map(function (x, i) { return i + 2; });
        numsTillSqroot.forEach(function (x) { return (arr = arr.filter(function (y) { return y % x !== 0 || y === x; })); });
        return arr;
    };
    MathsUtils.isEven = function (num) { return num % 2 === 0; };
    MathsUtils.isOdd = function (num) { return num % 2 === 1; };
    /**
     * maxBy([{a:5},{a:6}], o => o.a); --> 6
     *
     * @param arr
     * @param fn
     */
    MathsUtils.maxBy = function (arr, fn) { return Math.max.apply(Math, arr.map(typeof fn === 'function' ? fn : function (val) { return val[fn]; })); };
    MathsUtils.minBy = function (arr, fn) { return Math.min.apply(Math, arr.map(typeof fn === 'function' ? fn : function (val) { return val[fn]; })); };
    /**
     * sumBy([{ a: 4 }, { a: 2 }], o => o.a); // 6
     *
     * @param arr
     * @param fn
     */
    MathsUtils.sumBy = function (arr, fn) { return arr.map(typeof fn === 'function' ? fn : function (val) { return val[fn]; }).reduce(function (acc, val) { return acc + val; }, 0); };
    /**
     * Middle of sorted array;
     *
     * @param arr
     */
    MathsUtils.median = function (arr) {
        var mid = Math.floor(arr.length / 2), nums = __spreadArrays(arr).sort(function (a, b) { return a - b; });
        return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    };
    /**
     * percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6); // 55
     *
     * @param arr
     * @param val
     */
    MathsUtils.percentile = function (arr, val) { return (100 * arr.reduce(function (acc, v) { return acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0); }, 0)) / arr.length; };
    /**
     * toSafeInteger('3.2'); // 3
     * toSafeInteger(Infinity); // 9007199254740991
     *
     * @param num
     */
    MathsUtils.toSafeInteger = function (num) { return Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)); };
    return MathsUtils;
}());
var ValidationsUtils = /** @class */ (function () {
    function ValidationsUtils() {
    }
    ValidationsUtils.isValidUSA_SSN = function (value) {
        value = value.toLowerCase();
        var tmp = false;
        var re = /^([0-6]\d{2}|7[0-6]\d|77[0-2])([ \-]?)(\d{2})\2(\d{4})$/;
        if (!re.test(value)) {
            tmp = true;
        }
        var temp = value;
        if (value.indexOf("-") != -1) {
            temp = (value.split("-")).join("");
        }
        if (value.indexOf(" ") != -1) {
            temp = (value.split(" ")).join("");
        }
        if (temp.substring(0, 3) == "000") {
            tmp = true;
        }
        if (temp.substring(3, 5) == "00") {
            tmp = true;
        }
        if (temp.substring(5, 9) == "0000") {
            tmp = true;
        }
        if (tmp) {
            return false;
        }
        else
            return true;
    };
    ValidationsUtils.isValidEmail = function (email) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(email)) {
            return true;
        }
        return false;
    };
    ValidationsUtils.isValidUrl = function (value) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (regexp.test(value.toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationsUtils.isValidImage = function (value) {
        var exp = /.*\.(gif)|(jpeg)|(jpg)|(png)$/;
        if (value != "") {
            if (value.toLowerCase().match(exp)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
        //return false;
    };
    ValidationsUtils.isValidDate = function (value, userFormat) {
        if (userFormat === void 0) { userFormat = 'mm/dd/yyyy'; }
        var delimiter = /[^mdy]/.exec(userFormat)[0];
        var theFormat = userFormat.split(delimiter);
        var theDate = value.split(delimiter);
        function isDate(date, format) {
            var m, d, y, i = 0, len = format.length, f;
            for (i; i < len; i++) {
                f = format[i];
                if (/m/.test(f))
                    m = date[i];
                if (/d/.test(f))
                    d = date[i];
                if (/y/.test(f))
                    y = date[i];
            }
            return (m > 0 && m < 13 &&
                y && y.length === 4 &&
                d > 0 &&
                d <= (new Date(y, m, 0)).getDate());
        }
        return isDate(theDate, theFormat);
    };
    ValidationsUtils.validateCreditCard = function (cardnumber, cardtype) {
        if (cardtype === void 0) { cardtype = 'all'; }
        if (/[^0-9-\s]+/.test(cardnumber))
            return false;
        // The Luhn Algorithm. It's so pretty.
        var nCheck = 0, nDigit = 0, bEven = false;
        cardnumber = cardnumber.replace(/\D/g, "");
        for (var n = cardnumber.length - 1; n >= 0; n--) {
            var cDigit = cardnumber.charAt(n), nDigit = parseInt(cDigit, 10);
            if (bEven) {
                if ((nDigit *= 2) > 9)
                    nDigit -= 9;
            }
            nCheck += nDigit;
            bEven = !bEven;
        }
        return (nCheck % 10) == 0;
    };
    ValidationsUtils.isValidCreditCard = function (type, ccnum) {
        if (type)
            type = type.toUpperCase();
        if (ccnum)
            ccnum = ccnum.replace(/-/g, '');
        var re;
        switch (type) {
            case "AMEX": // American Express: length 15, prefix 34 or 37.
                re = /^3[4,7]\d{13}$/;
                break;
            case "DINERS": // Diners: length 14, prefix 30, 36, or 38.
                re = /^3[0,6,8]\d{12}$/;
                break;
            case 'CARTE_BLANCHE': //300 to 305
                re = /^30[1,2,3,4,5]\d{11}$/;
                break;
            case 'DISCOVER':
                re = /^6011?\d{4}?\d{4}?\d{4}$/;
                break;
            case 'DINERS_CLUB':
                re = /^((2014|2149)\d{10}|30([0-5])\d{11}|3(6|8)\d{12})$/;
                break;
            case 'ENROUTE':
            case 'JCB':
            case 'MASTERCARD': // Mastercard: length 16, prefix 51-55, dashes optional.
                re = /^5[1-5]\d{2}?\d{4}?\d{4}?\d{4}$/;
                break;
            case 'SOLO':
            case 'SWITCH':
            case 'VISA':
                re = /^4\d{3}?\d{4}?\d{4}?\d{4}$/;
                break;
            case 'LASER':
            default:
                break;
        }
        if (!re.test(ccnum))
            return false;
        ccnum = ccnum.split("-").join("");
        var checksum = 0;
        for (var i = (2 - (ccnum.length % 2)); i <= ccnum.length; i += 2) { // Add even digits in even length strings or odd digits in odd length strings.
            checksum += parseInt(ccnum.charAt(i - 1));
        }
        for (var i = (ccnum.length % 2) + 1; i < ccnum.length; i += 2) { // Analyze odd digits in even length strings or even digits in odd length strings.
            var digit = parseInt(ccnum.charAt(i - 1)) * 2;
            if (digit < 10) {
                checksum += digit;
            }
            else {
                checksum += (digit - 9);
            }
        }
        if ((checksum % 10) == 0)
            return true;
        else
            return false;
    };
    ValidationsUtils.isValidCitizenId = function (id, country) {
        function mod11And10(a) {
            for (var b = 5, c = a.length, d = 0; c > d; d++)
                b = (2 * (b || 10) % 11 + parseInt(a.charAt(d), 10)) % 10;
            return 1 === b;
        }
        ;
        function luhn(a) {
            for (var b = a.length, c = 0, d = [
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
            ], e = 0; b--;)
                e += d[c][parseInt(a.charAt(b), 10)], c ^= 1;
            return e % 10 === 0 && e > 0;
        }
        ;
        function mod37And36(a, b) {
            b = b || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var c = b.length, d = a.length, e = Math.floor(c / 2), f = 0; d > f; f++)
                e = (2 * (e || c) % (c + 1) + b.indexOf(a.charAt(f))) % c;
            return 1 === e;
        }
        switch (country) {
            case "BR":
                if (id = id.replace(/\D/g, ""), !/^\d{11}$/.test(id) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(id))
                    return !1;
                var cx = 0;
                for (var br = 0; 9 > cx; cx++)
                    br += (10 - cx) * parseInt(id.charAt(cx), 10);
                if (br = 11 - br % 11, (10 === br || 11 === br) && (br = 0), br + "" !== id.charAt(9))
                    return !1;
                var d = 0;
                var cxx = 0;
                for (cxx = 0; 10 > cxx; cxx++)
                    d += (11 - cxx) * parseInt(id.charAt(cxx), 10);
                return d = 11 - d % 11, (10 === d || 11 === d) && (d = 0), d + "" === id.charAt(10);
            case "HR":
                return /^[0-9]{11}$/.test(id) ? mod11And10(id) : !1;
            case "IE":
                if (!/^\d{7}[A-W][AHWTX]?$/.test(id))
                    return !1;
                var b = function (id) {
                    for (; id.length < 7;)
                        id = "0" + id;
                    for (var b = "WABCDEFGHIJKLMNOPQRSTUV", c = 0, d = 0; 7 > d; d++)
                        c += parseInt(id.charAt(d), 10) * (8 - d);
                    return c += 9 * b.indexOf(id.substr(7)), b[c % 23];
                };
                return 9 !== id.length || "A" !== id.charAt(8) && "H" !== id.charAt(8) ? id.charAt(7) === b(id.substr(0, 7)) : id.charAt(7) === b(id.substr(0, 7) + id.substr(8) + "");
            case "SM":
                return /^\d{5}$/.test(id);
            case "TH":
                if (id.length != 13)
                    return false;
                for (var i = 0, sum = 0; i < 12; i++)
                    sum += parseFloat(id.charAt(i)) * (13 - i);
                if ((11 - sum % 11) % 10 != parseFloat(id.charAt(12)))
                    return false;
                return true;
            case "TR":
                if (11 !== id.length)
                    return !1;
                var s = 0;
                var c = 0;
                for (var b_1 = 0; 10 > c; c++)
                    s += parseInt(id.charAt(c), 10);
                return s % 10 === parseInt(id.charAt(10), 10);
            default:
                throw new Error("Country " + country + " is not supported");
        }
    };
    return ValidationsUtils;
}());
var PromiseUtil = /** @class */ (function () {
    function PromiseUtil() {
    }
    /**
     * const delay = promisify((d, cb) => setTimeout(cb, d));
     * delay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s
     *
     * @param func
     */
    PromiseUtil.promisify = function (func) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) { return func.apply(void 0, __spreadArrays(args, [function (err, result) { return (err ? reject(err) : resolve(result)); }])); });
    }; };
    return PromiseUtil;
}());
exports.PromiseUtil = PromiseUtil;
var Queue = /** @class */ (function () {
    function Queue() {
        this.dataholder = [];
    }
    Queue.prototype.peek = function () {
        return this.dataholder.length > 0 ? this.dataholder[0] : null;
    };
    Queue.prototype.add = function (data) {
        this.dataholder.push(data);
    };
    Queue.prototype.size = function () {
        return this.dataholder.length;
    };
    Queue.prototype.poll = function () {
        var ret = null;
        if (this.dataholder.length > 0) {
            ret = this.dataholder[0];
        }
        this.dataholder.shift();
        return ret;
    };
    Queue.prototype.print = function () {
        console.log(this.dataholder);
    };
    return Queue;
}());
exports.Queue = Queue;
var LimitedQueue = /** @class */ (function (_super) {
    __extends(LimitedQueue, _super);
    function LimitedQueue(limit) {
        var _this = _super.call(this) || this;
        _this.limit = limit;
        return _this;
    }
    LimitedQueue.prototype.add = function (data) {
        _super.prototype.add.call(this, data);
        while (this.size() > this.limit)
            _super.prototype.poll.call(this);
    };
    return LimitedQueue;
}(Queue));
exports.LimitedQueue = LimitedQueue;
var LRUCache = /** @class */ (function () {
    function LRUCache(max) {
        if (max === void 0) { max = 10; }
        this.max = max;
        this.cache = new Map();
    }
    LRUCache.prototype.get = function (key) {
        var item = this.cache.get(key);
        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    };
    LRUCache.prototype.put = function (key, val) {
        if (this.cache.has(key))
            this.cache.delete(key);
        else if (this.cache.size == this.max)
            this.cache.delete(this.first());
        this.cache.set(key, val);
    };
    LRUCache.prototype.first = function () {
        return this.cache.keys().next().value;
    };
    LRUCache.prototype.print = function () {
        console.log(this.cache);
    };
    return LRUCache;
}());
exports.LRUCache = LRUCache;
exports.clone = ArraysUtils.clone;
exports.remove = ArraysUtils.remove;
exports.shuffle = ArraysUtils.shuffle;
exports.sample = ArraysUtils.sample;
exports.uniq = ArraysUtils.uniq;
exports.compact = ArraysUtils.compact;
exports.reverse = ArraysUtils.reverse;
exports.union = ArraysUtils.union;
exports.intersection = ArraysUtils.intersection;
exports.diff = ArraysUtils.diff;
exports.flattenDeep = ArraysUtils.flattenDeep;
exports.flattenByDepth = ArraysUtils.flattenByDepth;
exports.last = ArraysUtils.last;
exports.findIndices = ArraysUtils.findIndices;
exports.chunk = ArraysUtils.chunk;
exports.nthElement = ArraysUtils.nthElement;
exports.camelCase = StringsUtils.camelCase;
exports.pascalCase = StringsUtils.pascalCase;
exports.titleCase = StringsUtils.titleCase;
exports.toggleCase = StringsUtils.toggleCase;
exports.swapCase = StringsUtils.swapCase;
exports.dotCase = StringsUtils.dotCase;
exports.kebabCase = StringsUtils.kebabCase;
exports.snakeCase = StringsUtils.snakeCase;
exports.truncateString = StringsUtils.truncateString;
exports.random = StringsUtils.random;
exports.guid = StringsUtils.guid;
exports.formatCurrency = StringsUtils.formatCurrency;
exports.toCurrency = StringsUtils.toCurrency;
exports.isEmpty = StringsUtils.isEmpty;
exports.isInteger = StringsUtils.isInteger;
exports.isNumber = StringsUtils.isNumber;
exports.isJsonString = StringsUtils.isJsonString;
exports.isString = StringsUtils.isString;
exports.removeHtmlTags = StringsUtils.removeHtmlTags;
exports.escapeHTML = StringsUtils.escapeHTML;
exports.unescapeHTML = StringsUtils.unescapeHTML;
exports.isLowerCase = StringsUtils.isLowerCase;
exports.isUpperCase = StringsUtils.isUpperCase;
exports.words = StringsUtils.words;
exports.mask = StringsUtils.mask;
exports.pad = StringsUtils.pad;
exports.removeNonASCII = StringsUtils.removeNonASCII;
exports.hexToRGB = StringsUtils.hexToRGB;
exports.RGBToHex = StringsUtils.RGBToHex;
exports.extractURLs = StringsUtils.extractURLs;
exports.extractPhones = StringsUtils.extractPhones;
exports.extractEmails = StringsUtils.extractEmails;
exports.extractPercent = StringsUtils.extractPercent;
exports.extractNumbers = StringsUtils.extractNumbers;
exports.extractUSCurrencyAndNumbers = StringsUtils.extractUSCurrencyAndNumbers;
exports.extractHyphenated = StringsUtils.extractHyphenated;
exports.extractTime = StringsUtils.extractTime;
exports.extractDotted = StringsUtils.extractDotted;
exports.extractQuoted = StringsUtils.extractQuoted;
exports.replaceAt = StringsUtils.replaceAt;
exports.removeAt = StringsUtils.removeAt;
exports.size = StringsUtils.size;
exports.queryStringToObject = StringsUtils.queryStringToObject;
exports.slugify = StringsUtils.slugify;
exports.average = MathsUtils.average;
exports.averageBy = MathsUtils.averageBy;
exports.gcd = MathsUtils.gcd;
exports.lcm = MathsUtils.lcm;
exports.isPrime = MathsUtils.isPrime;
exports.primes = MathsUtils.primes;
exports.isEven = MathsUtils.isEven;
exports.isOdd = MathsUtils.isOdd;
exports.maxBy = MathsUtils.maxBy;
exports.minBy = MathsUtils.minBy;
exports.sumBy = MathsUtils.sumBy;
exports.median = MathsUtils.median;
exports.percentile = MathsUtils.percentile;
exports.toSafeInteger = MathsUtils.toSafeInteger;
exports.removeObject = ObjectsUtils.remove;
exports.safeparse = ObjectsUtils.safeparse;
exports.isObject = ObjectsUtils.isObject;
exports.isFunction = ObjectsUtils.isFunction;
exports.isNil = ObjectsUtils.isNil;
exports.isPrimitive = ObjectsUtils.isPrimitive;
exports.type = ObjectsUtils.objectType;
exports.lowercaseKeys = ObjectsUtils.lowercaseKeys;
exports.isValidEmail = ValidationsUtils.isValidEmail;
exports.isValidUrl = ValidationsUtils.isValidUrl;
exports.isValidImage = ValidationsUtils.isValidImage;
exports.isValidUSA_SSN = ValidationsUtils.isValidUSA_SSN;
exports.isValidDate = ValidationsUtils.isValidDate;
exports.isValidCreditCard = ValidationsUtils.isValidCreditCard;
exports.isValidCitizenId = ValidationsUtils.isValidCitizenId;
exports.promisify = PromiseUtil.promisify;
//# sourceMappingURL=commons.utils.js.map