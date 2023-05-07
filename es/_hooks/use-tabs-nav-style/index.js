import { getCurrentInstance as v, ref as d, computed as m, onMounted as b, onUnmounted as h, nextTick as T } from "vue";
import { sizeToNum as f } from "../../_utils/utils/index.js";
const p = (i) => {
  const e = v(), r = d({}), a = m(
    () => i.navs ? Math.max(
      i.navs.findIndex(
        (n) => n.name === i.activeName
      ),
      0
    ) : 0
  ), l = async () => {
    if (await T(), !e || !e.subTree.el)
      return;
    const { position: n } = i, t = {}, o = e.subTree.el.querySelectorAll(
      ".v-tabs-nav__item"
    );
    if (!o || !o.length)
      return;
    const s = o[a.value], u = window && window.getComputedStyle(s);
    n === "top" || n === "bottom" ? (t.width = s.clientWidth - f(u.padding) + "px", t.bottom = 0, t.transform = `translateX(${s.offsetLeft}px)`) : (n === "left" || n === "right") && (t.height = s.clientHeight - f(u.padding) + "px", t.transform = `translateY(${s.offsetTop}px)`, n === "left" ? t.right = 0 : t.left = 0), r.value = t;
  }, c = new IntersectionObserver(l);
  return b(() => {
    !e || !e.subTree.el || c.observe(e.subTree.el);
  }), h(() => {
    !e || !e.subTree.el || c.unobserve(e.subTree.el);
  }), {
    activeIndex: a,
    activeLineStyle: r,
    setActiveLineStyle: l
  };
};
export {
  p as useTabsNavStyle
};
