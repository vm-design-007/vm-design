import { isVNode as p, shallowRef as f } from "vue";
import { isArray as i, isObject as c } from "../is/index.js";
const l = (t) => {
  const r = i(t) ? t : [t], n = [];
  return r.forEach((e) => {
    i(e) ? n.push(...l(e)) : p(e) && i(e.children) ? n.push(...l(e.children)) : p(e) && e.component && n.push(e);
  }), n;
}, d = (t, r) => t.subTree ? l(t.subTree.children).filter(
  (e) => c(e.type) && e.type.name === r
) : [], v = (t, r) => {
  const n = /* @__PURE__ */ new Map(), e = f([]);
  return {
    children: e,
    registerChild: (o) => {
      n.set(o.uid, o);
      const a = d(t, r).map((s) => s.component ? s.component.uid : null).filter(Boolean);
      e.value = a.map((s) => n.get(s)).filter(Boolean);
    },
    unRegisterChild: (o) => {
      n.delete(o.uid), e.value = e.value.filter((u) => u.uid !== o.uid);
    }
  };
};
export {
  l as flattedChildren,
  d as getChildrenComponent,
  v as useChildren
};
