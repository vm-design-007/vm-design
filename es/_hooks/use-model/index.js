import { computed as n } from "vue";
const c = (e, o, r, t) => ({ keyword: n({
  get: () => e[o],
  set: (d) => {
    r(t, d);
  }
}) });
export {
  c as useModel
};
