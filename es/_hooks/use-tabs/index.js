import { getCurrentInstance as p, ref as d, computed as v, watch as f, onMounted as T, nextTick as b, provide as E } from "vue";
import { useChildren as N } from "../../_utils/tabs/index.js";
import { EMIT_UPDATE as P } from "../../_tokens/emits/index.js";
import { useRun as h } from "../use-run/index.js";
import { TABS_PROPS_KEY as A } from "../../tabs/src/index.js";
import "../../loading/src/index2.js";
import "../use-message/index.js";
const S = (n, u) => {
  const { run: l } = h(), m = p(), t = N(m, "FTabsPane"), a = d(0), s = (e) => {
    a.value = e, u(P, e);
  }, c = (e, r, i) => {
    l(n.onEdit, e, r, i);
  }, o = v(() => t.children.value && t.children.value.map((e, r) => (e.paneName = e.paneName || r, {
    name: e.paneName,
    label: e.slots.label || e.prop.label
  })));
  return f(
    () => n.modelValue,
    (e) => {
      a.value = e;
    },
    { immediate: !0 }
  ), T(async () => {
    await b(), s(
      n.modelValue || o.value[0] && o.value[0].name
    );
  }), E(A, {
    activeName: a,
    ...t
  }), {
    navs: o,
    activeName: a,
    setEdit: c,
    setActiveName: s
  };
};
export {
  S as useTabs
};
