import "vue";
import { setNumberProp as e, setArrayProp as n, setBooleanProp as r, setObjectProp as t, setFunctionProp as o } from "../../_utils/props/index.js";
const u = {
  current: {
    ...e(1),
    require: !0
  },
  total: {
    ...e(0),
    require: !0
  },
  pageSize: e(10),
  pageSizes: n(),
  pagerCount: e(7),
  background: r(),
  round: r(),
  prevIcon: t(),
  nextIcon: t(),
  disabled: r(),
  jumpSearch: r(),
  onPrev: o(),
  onNext: o(),
  pageSizeChange: o(),
  onChange: o()
};
export {
  u as Props
};
