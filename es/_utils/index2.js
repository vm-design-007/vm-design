var c = Object.defineProperty;
var l = (t, e, r) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var o = (t, e, r) => (l(t, typeof e != "symbol" ? e + "" : e, r), r);
import { isString as h } from "./index3.js";
class n {
  constructor(e, r, s, i) {
    o(this, "node");
    o(this, "props");
    o(this, "emit");
    o(this, "callback");
    o(this, "loadCreateImg", (e) => {
      const r = new Image();
      e ? r.src = e : r.src = this.props.src, r.addEventListener("error", (s) => {
        this.onerror(s);
      }), r.addEventListener("load", (s) => {
        this.onload(s, r.src);
      });
    });
    o(this, "onerror", (e) => {
      if (this.props.errSrc) {
        this.loadCreateImg(this.props.errSrc), this.props.errSrc = "";
        return;
      }
      this.emit("error", e), this.callback && this.callback(!1);
    });
    o(this, "onload", (e, r) => {
      this.node.src = r, this.emit("load", e), this.callback && this.callback(!0);
    });
    this.node = e, this.props = r, this.emit = s, this.callback = i;
  }
}
class d extends n {
  constructor(r, s, i, a) {
    super(r, s, i, a);
    o(this, "observer", () => {
      const r = new IntersectionObserver(
        (s) => {
          s[0].isIntersecting && (this.loadCreateImg(), r.unobserve(this.node));
        },
        {
          rootMargin: h(this.props.rootMargin) ? this.props.rootMargin : this.props.rootMargin + "px"
        }
      );
      return r;
    });
    o(this, "lazyCreateImg", () => {
      this.observer().observe(this.node);
    });
  }
}
const m = (t, e, r, s) => e.lazy ? new d(t, e, r, s).lazyCreateImg() : new n(t, e, r, s).loadCreateImg();
export {
  m as loadImage
};
