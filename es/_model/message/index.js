import i from "../../message/src/index2.js";
import { createVNode as l, render as m } from "vue";
import { useMassageManage as f } from "../../_hooks/use-message-mange/index.js";
import { messageTypes as g } from "./index2.js";
const p = f(), u = {
  placement: "top"
};
let r = 1;
const d = (e) => {
  const t = document.createElement("div"), n = `message-${r}`;
  typeof e == "string" && (e = {
    message: e
  });
  const s = {
    id: n,
    ...u,
    ...e
  };
  s.onDestroy = () => {
    var c;
    (c = s.closeEnd) == null || c.call(s), m(null, t);
  };
  const o = l(i, s);
  m(o, t), document.body.appendChild(t.firstElementChild);
  const a = o.component;
  return r++, p.createInstance(
    {
      id: n,
      vm: a,
      close: () => {
        a.exposeProxy.close();
      },
      bottom: 0,
      visible: 0
    },
    s.placement
  );
};
g.forEach((e) => {
  d[e] = (t) => {
    d({ message: t, type: e });
  };
});
export {
  d as default,
  p as massageManage
};
