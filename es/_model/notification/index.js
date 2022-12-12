import d from "../../notification/src/index2.js";
import { createVNode as l, render as m } from "vue";
import { useMassageManage as f } from "../../_hooks/use-message-mange/index.js";
import { notificationTypes as g } from "./index2.js";
import { isString as p } from "../../_utils/index3.js";
const u = f(), h = {
  placement: "top-right"
};
let r = 1;
const i = (e) => {
  const n = document.createElement("div"), o = `message-${r}`;
  p(e) && (e = {
    message: e
  });
  const t = {
    id: o,
    ...h,
    ...e
  };
  t.onDestroy = () => {
    var c;
    (c = t.closeEnd) == null || c.call(t), m(null, n);
  };
  const s = l(d, t);
  m(s, n), document.body.appendChild(n.firstElementChild);
  const a = s.component;
  return r++, u.createInstance(
    {
      id: o,
      vm: a,
      close: () => {
        a.exposeProxy.close();
      },
      bottom: 0,
      visible: 0
    },
    t.placement
  );
};
g.forEach((e) => {
  i[e] = (n) => {
    i({ message: n, type: e });
  };
});
export {
  i as default,
  u as massageManage
};
