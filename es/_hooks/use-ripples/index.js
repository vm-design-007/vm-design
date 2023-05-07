import { computed as u } from "vue";
const f = (s, p, t) => {
  const c = u(() => {
    if (t.ripplesColor)
      return t.ripplesColor;
    const r = {
      default: "#f0f0f0",
      primary: "#2d5af1",
      success: "#52b35e",
      danger: "#ff0200",
      warning: "#fcc202",
      info: "#1d1d1f"
    };
    if (t.component === "v-button") {
      const { simple: n, text: e } = t;
      return n || e ? r[t.type] : "";
    }
    return r[t.type];
  }), o = (r) => {
    setTimeout(() => {
      r.remove();
    }, t.duration || 400);
  }, a = (r, n) => {
    const e = document.createElement("span");
    if (e.className = t.className, e.style.background = c.value, e.style.left = `${r}px`, t.component === "v-button") {
      const l = document.createElement("div");
      return l.className = "v-button__ripples-box", l.appendChild(e), e.style.top = `${n}px`, l;
    }
    return e;
  };
  return { runRipples: () => {
    const { layerX: r, layerY: n } = s, e = a(r, n);
    p.appendChild(e), o(e);
  } };
};
export {
  f as useRipples
};
