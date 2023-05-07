import { sizeChange as a } from "../../_utils/utils/index.js";
import "vue";
const l = () => ({ createWatermark: (t) => {
  const i = document.createElement("canvas"), n = window.devicePixelRatio || 1;
  i.width = t.width * n, i.height = t.height * n, i.style.width = t.width + "px", i.style.height = t.height + "px";
  const e = i.getContext("2d");
  return e && (e.rotate(-8 * Math.PI / 100), e.font = `${a(t.fontSize)} serif`, e.fillStyle = t.fontColor, e.textAlign = "left", e.textBaseline = "middle", e.strokeText(t.content, t.width / 20, t.height)), i.toDataURL("image/png");
} });
export {
  l as useCanvas
};
