const { toString: s } = Object.prototype, o = (t, n) => s.call(t) === `[object ${n}]`, e = (t) => o(t, "Date"), i = (t) => typeof t == "string", c = (t) => typeof t == "number" && !isNaN(t), r = (t) => o(t, "Boolean"), a = (t) => o(t, "Object"), y = (t) => typeof t == "function", p = Array.isArray, b = typeof window < "u";
export {
  o as is,
  p as isArray,
  r as isBoolean,
  b as isBrowser,
  e as isDate,
  y as isFunction,
  c as isNumber,
  a as isObject,
  i as isString
};
