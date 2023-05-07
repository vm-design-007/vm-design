import { isArray as s, isObject as f } from "../is/index.js";
import "vue";
const p = (e, n) => {
  let r = [];
  return s(e) && e.length && e.forEach((t) => {
    const o = f(t.type) && t.type.name;
    if (o === n && r.push(t), o !== n && t.children && s(t.children)) {
      const i = p(
        t.children,
        n
      );
      r = r.concat(i);
    }
  }), r;
};
export {
  p as getChildren
};
