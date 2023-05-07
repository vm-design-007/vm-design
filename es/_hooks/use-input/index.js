import "vue";
import { EMIT_UPDATE as r } from "../../_tokens/emits/index.js";
import { useRun as u } from "../use-run/index.js";
import "../../loading/src/index2.js";
import "../use-message/index.js";
const C = (n, o, t) => {
  const { run: a } = u();
  return {
    handleInput: (e) => {
      a(n.onInput, t.value, e);
    },
    handleChange: (e) => {
      a(n.onChange, t.value, e);
    },
    handleClear: () => {
      n.disabled || o(r, "");
    }
  };
};
export {
  C as useInput
};
