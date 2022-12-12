const o = (t) => (t.install = (l) => {
  const { name: n } = t;
  l.component(n, t);
}, t), s = (t, l) => (t.install = (n) => {
  n.config.globalProperties[l] = t;
}, t);
export {
  o as install,
  s as installFn
};
