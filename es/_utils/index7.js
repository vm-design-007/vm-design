const h = (s) => {
  const n = [];
  return s.forEach((r) => {
    const e = {
      label: r.label,
      level: r.level,
      index: r.index,
      show: r.show
    };
    n.push(e), r.children && n.push(...h(r.children));
  }), n;
}, d = (s) => {
  if (!Array.isArray(s))
    return [];
  const n = (r, e = 0) => (e++, r.map((l, c) => {
    l.level = e, l.index = c, l.show = !1;
    const o = l.children;
    return o && o.length && n(o, e), l;
  }));
  return n(s);
};
export {
  d as treeAddLevel,
  h as treeToFlat
};
