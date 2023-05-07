import { ref as g, onMounted as I, watch as M } from "vue";
import { sizeChange as S, sizeToNum as T } from "../../_utils/utils/index.js";
import { useRun as z } from "../use-run/index.js";
import "../../loading/src/index2.js";
import "../use-message/index.js";
const x = (s, r, u) => {
  const { run: d } = z(), a = g(!0), m = g(!1);
  let f = !1;
  const h = (e, o, t) => {
    e.src = t, a.value = !0, m.value = !0, d(r.onLoad, o);
  }, b = (e) => {
    a.value = !1, d(r.onError, e);
  }, i = (e, o) => {
    const t = new Image();
    new Promise((n, l) => {
      t.src = o || r.src, t.addEventListener("load", (c) => {
        n(c);
      }), t.addEventListener("error", (c) => {
        l(c);
      });
    }).then((n) => {
      n && h(e, n, t.src);
    }).catch((n) => {
      if (!f && r.errSrc) {
        i(e, r.errSrc), f = !0;
        return;
      }
      b(n);
    });
  }, E = (e) => {
    const o = new IntersectionObserver(
      (t) => {
        t[0].isIntersecting && (i(e), o.unobserve(e));
      },
      { rootMargin: S(r.rootMargin) }
    );
    return o;
  }, L = (e) => {
    const o = () => {
      const t = window.innerHeight || document.documentElement.clientHeight, n = document.documentElement.scrollTop || document.body.scrollTop, l = e.offsetParent.offsetTop, c = t + n - l;
      Math.abs(c) < Math.abs(T(r.rootMargin)) && (i(e), window && window.removeEventListener("scroll", o));
    };
    window && window.addEventListener("scroll", o);
  }, v = () => {
    if (!!s.value) {
      if (r.lazy) {
        IntersectionObserver ? E(s.value).observe(s.value) : L(s.value);
        return;
      }
      i(s.value);
    }
  }, w = () => {
    if (u) {
      if (u())
        v();
      else
        return;
      return;
    }
    v();
  };
  return I(() => {
    w();
  }), M(
    () => r.src,
    () => {
      w();
    }
  ), { isSuccess: a, isShowNode: m };
};
export {
  x as useLoadImg
};
