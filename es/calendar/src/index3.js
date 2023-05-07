import "vue";
import { setBooleanProp as e, setStringProp as o, setStringNumberProp as r, setFunctionProp as t } from "../../_utils/props/index.js";
const p = {
  date: {
    type: Date,
    default: () => new Date(),
    required: !0
  },
  lunar: e(),
  showHeader: e(!0),
  border: e(),
  borderColor: o(),
  dayCellHeight: r(),
  weekCellHeight: r(),
  onChangeDate: t(),
  onChangeMonth: t()
};
export {
  p as Props
};
