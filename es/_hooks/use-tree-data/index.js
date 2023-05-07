import { computed as a } from "vue";
import { treeAddKey as f, treeToFlat as p } from "../../_utils/tree/index.js";
import { isArray as t } from "../../_utils/is/index.js";
const D = (s) => {
  const n = a(() => f(s)), d = a(
    () => p(n.value)
  ), c = (o) => {
    t(o) && o.forEach((e) => {
      e.show = !1, e.open = !1, e.children && c(e.children);
    });
  }, h = (o, e) => {
    o.forEach((r) => {
      r.id === e ? (r.open ? r.children && c(r.children) : r.children && r.children.forEach((l) => {
        l.show = !l.show;
      }), r.open = !r.open) : r.children && r.children.length && h(r.children, e);
    });
  };
  return {
    treeData: n,
    flatTreeData: d,
    getItem: h
  };
};
export {
  D as useTreeData
};
