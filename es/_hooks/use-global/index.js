import { inject as y, computed as o, reactive as a, toRefs as z } from "vue";
import { VM_GLOBAL_PROPS_KEY as L } from "../../vm-global/src/index.js";
import { LANG as P } from "../../_lang/index.js";
import { isArray as _ } from "../../_utils/is/index.js";
import { VM_TYPE as E, VM_SIZE as M } from "../../_tokens/attrs/index.js";
const h = (e) => {
  const r = y(L, null), u = (t = "default") => o(() => !e || e.type && !E.includes(e.type) ? t : e.type || r && r.type || t), c = (t = "middle", n) => o(() => !e || e.size && !M.includes(e.size) ? t : e.size || n || r && r.size || t), f = (t) => o(() => {
    const n = r && r.lang || "zh-CN";
    return P[n][t];
  }), l = {
    type: u,
    size: c
  };
  return {
    getType: u,
    getSize: c,
    getLang: f,
    getProp: (t, n) => {
      const i = {};
      return _(t) && t.forEach((s, g) => {
        if (l[s]) {
          const m = n && n[g];
          i[s] = l[s](m);
        }
      }), e ? a({
        ...z(e),
        ...i
      }) : a({
        ...i
      });
    }
  };
};
export {
  h as useGlobal
};
