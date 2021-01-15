"use strict";
/*
 * Returns a random element from an array.
 * Usage: list.random()
 */
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
};
//# sourceMappingURL=array.random.js.map