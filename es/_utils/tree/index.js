import { isArray as s } from "../is/index.js";
import "vue";
const e = (l) => {
  const d = [];
  return l.forEach((h) => {
    d.push(h), h.children && d.push(...e(h.children));
  }), d;
}, a = (l) => {
  if (!s(l))
    return [];
  const d = (o, n = 0) => (n++, o.map((r) => {
    r.level = n, r.show = r.level === 1, r.open = !1, r.isChild = !!r.children;
    const c = r.children;
    return c && c.length && d(c, n), r;
  })), h = (o, n = "") => (o.forEach((r, c) => {
    r.children && r.children.length ? (r.id = Number(`${n}${c + 1}`), h(r.children, `${n}${c + 1}`)) : r.id = Number(`${n}${c + 1}`);
  }), o);
  return h(d(l));
};
export {
  a as treeAddKey,
  e as treeToFlat
};
