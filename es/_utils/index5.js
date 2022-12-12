var l = Object.defineProperty;
var g = (e, t, o) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var n = (e, t, o) => (g(e, typeof t != "symbol" ? t + "" : t, o), o);
class c {
  constructor(t) {
    n(this, "color");
    n(this, "hexToRgb", () => {
      if (!/^\#?[0-9A-Fa-f]{6}$/.test(this.color))
        return console.warn("\u8F93\u5165\u9519\u8BEF\u7684 hex \u503C\u8272\u53F7");
      const r = this.color.replace("#", "").match(/../g);
      for (let h = 0; h < r.length; h++)
        r[h] = parseInt(r[h], 16).toString();
      return r;
    });
    n(this, "rgbToHex", (...t) => {
      const o = [...t];
      for (let r = 0; r < o.length; r++)
        o[r].length === 1 && (o[r] = "0" + o[r]);
      return "#" + o.join("");
    });
    n(this, "getDarkColor", (t) => {
      const o = this.hexToRgb();
      for (let r = 0; r < o.length; r++)
        o[r] = Math.floor(Number(o[r]) * (1 - t)).toString(16);
      return this.rgbToHex(...o);
    });
    n(this, "getLightColor", (t) => {
      const o = this.hexToRgb();
      for (let r = 0; r < o.length; r++)
        o[r] = Math.floor(
          (255 - Number(o[r])) * t + Number(o[r])
        ).toString(16);
      return this.rgbToHex(...o);
    });
    this.color = t;
  }
}
export {
  c as ChangeColor
};
