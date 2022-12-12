const r = (t, e = 2) => Number(t.toFixed(e)), n = (t, e = 200) => {
  let o;
  return () => {
    o && clearTimeout(o), o = setTimeout(() => {
      t();
    }, e);
  };
}, c = (t) => typeof t == "number" && Object.prototype.toString.call(t) === "[object Number]", i = (t) => typeof t == "boolean" && Object.prototype.toString.call(t) === "[object Boolean]", p = (t) => typeof t == "string" && Object.prototype.toString.call(t) === "[object String]", b = (t) => t > 9 ? t.toString() : `0${t}`, l = (t, e = "px") => typeof t == "string" ? t : t + e;
export {
  b as addZero,
  n as debounce,
  i as isBoolean,
  c as isNumber,
  p as isString,
  r as keepDecimal,
  l as sizeChange
};
