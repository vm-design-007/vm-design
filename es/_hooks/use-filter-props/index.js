import { reactive as s } from "vue";
const c = (e, t) => {
  const r = s({});
  for (const o of t)
    o && (r[o] = e[o]);
  return r;
};
export {
  c as useFilterProps
};
