var n = Object.defineProperty;
var p = (s, t, e) => t in s ? n(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var i = (s, t, e) => (p(s, typeof t != "symbol" ? t + "" : t, e), e);
class l {
  constructor(t, e, o) {
    i(this, "evt");
    i(this, "node");
    i(this, "option");
    i(this, "clickRipples", () => {
      const { layerX: t, layerY: e } = this.evt, o = this.renderElement(t, e);
      this.node.appendChild(o), this.removeElement(o);
    });
    i(this, "computedRipplesColor", () => {
      if (this.option.ripplesColor)
        return this.option.ripplesColor;
      const t = {
        default: "#f0f0f0",
        primary: "#2d5af1",
        success: "#52b35e",
        danger: "#ff0200",
        warning: "#fcc202"
      };
      if (this.option.component === "v-button") {
        const { simple: e, text: o } = this.option;
        return e || o ? t[this.option.type] : "";
      }
      return t[this.option.type];
    });
    i(this, "renderElement", (t, e) => {
      const o = document.createElement(
        "span"
      );
      return o.className = this.option.className, o.style.background = this.computedRipplesColor(), o.style.left = `${t}px`, this.option.component === "v-button" && (o.style.top = `${e}px`), o;
    });
    i(this, "removeElement", (t) => {
      setTimeout(() => {
        t.remove();
      }, this.option.duration || 400);
    });
    this.evt = t, this.node = e, this.option = o;
  }
}
export {
  l as Ripples
};
