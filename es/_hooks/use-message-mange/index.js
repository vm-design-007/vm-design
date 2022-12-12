import { reactive as c } from "vue";
const g = () => {
  const t = c({}), o = (e, n) => t[e] ? t[e].findIndex(
    (r) => r.id === n
  ) : -1;
  return {
    instances: t,
    getSiblingOffset: (e, n, r) => {
      const s = o(e, n);
      if (s === -1)
        return 0;
      const i = t[e][r ? s + 1 : s - 1] || null;
      return i ? i.vm.exposeProxy.bottom : 0;
    },
    removeInstance: (e, n) => {
      const r = o(e, n);
      t[e].splice(r, 1);
    },
    createInstance: (e, n) => (t[n] ? t[n].push(e) : t[n] = [e], e)
  };
};
export {
  g as useMassageManage
};
