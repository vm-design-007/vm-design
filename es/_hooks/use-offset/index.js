import { ref as u, onMounted as a, onUnmounted as c } from "vue";
import { EMIT_UPDATE as v } from "../../_tokens/emits/index.js";
const E = (o, f, l) => {
  const i = u(0), w = (e) => {
    let n = e.offsetLeft, t = e.offsetParent;
    for (; t !== null; )
      n += t.offsetLeft, t = t.offsetParent;
    return n;
  }, s = () => {
    o.value && (i.value = w(o.value));
  };
  a(() => {
    s(), window && window.addEventListener("resize", s);
  }), c(() => {
    window && window.removeEventListener("resize", s);
  });
  const r = u(0);
  return { offset: r, offsetLeft: i, setPosition: (e) => {
    e < 0 ? e = 0 : e > 100 && (e = 100);
    const t = Math.round(e / f.step) * f.step;
    r.value = t, l(v, t);
  } };
};
export {
  E as useOffset
};
