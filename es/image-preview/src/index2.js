import { defineComponent as b, ref as g, openBlock as s, createBlock as c, Transition as R, withCtx as m, createElementBlock as w, normalizeStyle as y, withModifiers as B, createElementVNode as $, Fragment as M, unref as o, createVNode as t, createCommentVNode as u } from "vue";
import { Props as N, Emits as P } from "./index3.js";
import { VToolbar as d } from "../../toolbar/index.js";
import { VToolbarItem as i } from "../../toolbar-item/index.js";
import { keepDecimal as T } from "../../_utils/index3.js";
import D from "../../_components/svg/index2.js";
import O from "../../_components/svg/index3.js";
import S from "../../_components/svg/index5.js";
import Z from "../../_components/svg/index6.js";
import A from "../../_components/svg/index9.js";
import Y from "../../_components/svg/index10.js";
import j from "../../_components/svg/index15.js";
import q from "../../_components/svg/index16.js";
const G = ["onClick"], H = ["src"], J = b({
  name: "VImagePreview"
}), ae = /* @__PURE__ */ b({
  ...J,
  props: N,
  emits: P,
  setup(L, { emit: v }) {
    const l = L, a = g(1), p = g(0), r = g(
      l.showIndex > l.imgList.length - 1 ? 0 : l.showIndex
    ), z = () => {
      l.imgList.forEach((n) => {
        const f = new Image();
        f.src = n;
      });
    }, k = () => {
      T(a.value, 1) <= 0.2 || (a.value -= 0.2);
    }, V = () => {
      a.value >= 10 || (a.value += 0.2);
    }, _ = () => {
      z();
    }, h = (e) => {
      v("close", e), v("update:visible", !1);
    }, x = (e) => {
      l.modalClose && h(e);
    }, E = (e) => {
      if (e.preventDefault(), e.deltaY > 1) {
        k();
        return;
      }
      V();
    }, C = () => {
      a.value = 1, p.value = 0;
    }, I = (e) => {
      C(), {
        next: () => {
          if (r.value < l.imgList.length - 1) {
            r.value++;
            return;
          }
          r.value = 0;
        },
        prev: () => {
          if (r.value > 0) {
            r.value--;
            return;
          }
          r.value = l.imgList.length - 1;
        }
      }[e]();
    }, F = ({ key: e }) => {
      ({
        1: () => k(),
        2: () => V(),
        3: () => C(),
        4: () => {
          p.value += 90;
        },
        5: () => {
          p.value += 90;
        }
      })[e]();
    };
    return (e, n) => (s(), c(R, {
      name: "v-image-preview",
      onEnter: _
    }, {
      default: m(() => [
        e.visible ? (s(), w("div", {
          key: 0,
          class: "v-image-preview",
          style: y({ zIndex: e.zIndex }),
          onClick: B(x, ["self"]),
          onMousewheel: E
        }, [
          $("img", {
            class: "v-image-preview__exhibition",
            draggable: "false",
            src: e.imgList[r.value],
            style: y({
              transform: `scale(${a.value}) rotate(${p.value}deg)`,
              borderRadius: e.round
            })
          }, null, 12, H),
          e.imgList.length > 1 ? (s(), w(M, { key: 0 }, [
            e.imgList.length > 1 ? (s(), c(o(d), {
              key: 0,
              class: "right-button",
              round: "",
              onClick: n[0] || (n[0] = (f) => I("next"))
            }, {
              default: m(() => [
                t(o(i), {
                  icon: o(O),
                  "icon-size": "25px"
                }, null, 8, ["icon"])
              ]),
              _: 1
            })) : u("", !0),
            e.imgList.length > 1 ? (s(), c(o(d), {
              key: 1,
              class: "left-button",
              round: "",
              onClick: n[1] || (n[1] = (f) => I("prev"))
            }, {
              default: m(() => [
                t(o(i), {
                  icon: o(D),
                  "icon-size": "25px"
                }, null, 8, ["icon"])
              ]),
              _: 1
            })) : u("", !0)
          ], 64)) : u("", !0),
          e.isCloseBtn ? (s(), c(o(d), {
            key: 1,
            class: "close-button",
            round: "",
            onClick: h
          }, {
            default: m(() => [
              t(o(i), {
                icon: o(S),
                "icon-size": "20px"
              }, null, 8, ["icon"])
            ]),
            _: 1
          })) : u("", !0),
          e.isOption ? (s(), c(o(d), {
            key: 2,
            class: "option-toolbar",
            round: "",
            onClick: F
          }, {
            default: m(() => [
              t(o(i), {
                icon: o(q),
                "data-key": 1
              }, null, 8, ["icon"]),
              t(o(i), {
                icon: o(j),
                "data-key": 2
              }, null, 8, ["icon"]),
              t(o(i), {
                icon: o(Z),
                "data-key": 3
              }, null, 8, ["icon"]),
              t(o(i), {
                icon: o(Y),
                "data-key": 4
              }, null, 8, ["icon"]),
              t(o(i), {
                icon: o(A),
                "data-key": 5
              }, null, 8, ["icon"])
            ]),
            _: 1
          })) : u("", !0)
        ], 44, G)) : u("", !0)
      ]),
      _: 1
    }));
  }
});
export {
  ae as default
};
