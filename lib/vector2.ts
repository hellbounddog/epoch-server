(function (self) {
  const Vector2 = function(x, y) {
    return new Vector2.fn.init(x, y);
  };

  Vector2.fn = Vector2.prototype = {
    constructor: Vector2,
    init: function(x, y) {
      if (x instanceof Vector2) {
        this.clone(x);
      } else {
        this.x = x || 0;
        this.y = y || 0;
      }

      return this;
    },
    add: function(x, y) {
      if (x instanceof Vector2) {
        this.x += x.x;
        this.y += x.y;
      } else {
        this.x += x;
        this.y += y;
      }

      return this;
    },
    substract: function(x, y) {
      if (x instanceof Vector2) {
        this.x -= x.x;
        this.y -= x.y;
      } else {
        this.x -= x;
        this.y -= y;
      }

      return this;
    },
    multiply: function(x, y) {
      if (x instanceof Vector2) {
        this.x *= x.x;
        this.y *= x.y;
      } else {
        this.x *= x;
        this.y *= y;
      }

      return this;
    },
    multiplyBy: function(number) {
      this.x *= number;
      this.y *= number;

      return this;
    },
    divide: function(x, y) {
      if (x instanceof Vector2) {
        this.x /= x.x;
        this.y /= x.y;
      } else {
        this.x /= x;
        this.y /= y;
      }

      return this;
    },
    divideBy: function(number) {
      this.x /= number;
      this.y /= number;

      return this;
    },
    length: function() {
      return Math.sqrt((this.x * this.x) + (this.y * this.y));
    },
    dot: function(vector) {
      return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    },
    cross: function(vector) {
      var x = this.x;
      var y = this.y;
      var z = this.z;

      this.x = y * vector.z - z * vector.y;
      this.y = z * vector.x - x * vector.z;
      this.z = x * vector.y - y * vector.x;

      return this;
    },
    normalize: function() {
      return Vector2(this).divideBy(this.length());
    },
    angle: function(vector) {
      return Math.acos(
        Vector2(this).dot(vector) /
          (Vector2(this).length() * Vector2(vector).length())
      );
    },
    equal: function(vector) {
      return this.x === vector.x && this.y === vector.y;
    },
/* TODO
    rotate: function (x, y) {
      if (!x instanceof Vector2) {
        x = new Vector2(x, y);
      }

      var x1 = this.x;
      var y1 = this.y;
      var angleX = x.x / 2;
      var angleY = x.y / 2;

      var cx = Math.cos(angleX);
      var cy = Math.cos(angleY);
      var sx = Math.sin(angleX);
      var sy = Math.sin(angleY);

      var x = sx * cy - -cx * sy;
      var y = cx * sy * cz + sx * cy * -sz;

      var m0 = 1 - 2 * (y * y + z * z);
      var m1 = 2 * (x * y + z * w);
      var m2 = 2 * (x * z - y * w);

      var m4 = 2 * (x * y - z * w);
      var m5 = 1 - 2 * (x * x + z * z);
      var m6 = 2 * (z * y + x * w);

      var m8 = 2 * (x * z + y * w);
      var m9 = 2 * (y * z - x * w);
      var m10 = 1 - 2 * (x * x + y * y);

      this.x = x1 * m0 + y1 * m4 + z1 * m8;
      this.y = x1 * m1 + y1 * m5 + z1 * m9;
      this.z = x1 * m2 + y1 * m6 + z1 * m10;

      return this;
    },
*/
    clone: function(vector) {
      this.x = vector.x;
      this.y = vector.y;
      this.z = vector.z;

      return this;
    },
  };

  Vector2.fn.init.prototype = Vector2.fn;

  if (
    typeof define !== 'undefined' &&
    define instanceof Function &&
    define.amd != undefined
  ) {
    define(function() {
      return Vector2;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = Vector2;
  } else if (self != undefined) {
    self.Vector2 = Vector2;
  }
})(this || {});
