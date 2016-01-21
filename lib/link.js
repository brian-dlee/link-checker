var Link = Object.create(Object.prototype, {
  __complete: {
    value: false,
    writable: true
  },
  __ok: {
    value: false,
    writable: true
  },
  __broken: {
    value: false,
    writable: true
  },
  url: {
    value: '',
    enumerable: true
  },
  pending: {
    value: false,
    writable: true,
    enumerable: true
  },
  complete: {
    get: function () {
      return this.__complete;
    },
    set: function (value) {
      this.pending = false;
      this.__complete = value;
    }
  },
  ok: {
    get: function () {
      return this.__ok;
    },
    set: function (value) {
      this.pending = false;
      this.__complete = true;
      this.__ok = value;
    }
  },
  broken: {
    get: function () {
      return this.__broken;
    },
    set: function (value) {
      this.pending = false;
      this.__complete = true;
      this.__broken = value;
    }
  }
});

module.exports = Link;