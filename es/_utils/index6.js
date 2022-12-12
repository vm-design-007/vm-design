import { sizeChange as h } from "./index3.js";
const l = (t) => {
  const i = document.createElement("canvas"), n = window.devicePixelRatio || 1;
  i.width = t.width * n, i.height = t.height * n, i.style.width = t.width + "px", i.style.height = t.height + "px";
  const e = i.getContext(
    "2d"
  );
  return e && (e.rotate(-8 * Math.PI / 100), e.font = `${h(t.fontSize)} serif`, e.fillStyle = t.fontColor, e.textAlign = "left", e.textBaseline = "middle", e.fillText(t.content, t.width / 20, t.height)), i.toDataURL("image/png");
};
export {
  l as createBase64
};
