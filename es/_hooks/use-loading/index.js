import { createApp as c } from "vue";
import u from "../../loading/src/index2.js";
const g = () => {
  const r = (o, t) => {
    const e = (n) => t.value[n], i = (n) => e(n) || o.getAttribute(`v-loading-${n}`) || "";
    return {
      visible: !!t.value,
      fullscreen: t.modifiers.fullscreen,
      text: i("text"),
      color: i("color"),
      background: i("background")
    };
  }, a = (o, t) => {
    o.originalPosition !== "absolute" && o.originalPosition !== "fixed" && (o.style.position = "relative");
    const e = r(o, t), i = c(u, e), n = i.mount(
      document.createElement("div")
    );
    o.vm = n, o.loadingInstance = i, o.appendChild(n.$el);
  }, s = (o) => {
    !o.loadingInstance || (o.style.position = o.originalPosition, o.removeChild(o.vm.$el), o.loadingInstance.unmount(), o.loadingInstance = null);
  };
  return {
    mounted: (o, t) => {
      const e = getComputedStyle(o).position || "static";
      o.originalPosition = e, t.value && a(o, t);
    },
    updated: (o, t) => {
      t.value !== t.oldValue && (t.value ? a(o, t) : s(o));
    }
  };
};
export {
  g as useLoading
};
