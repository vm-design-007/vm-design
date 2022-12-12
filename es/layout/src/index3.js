const r = {
  direction: {
    type: String,
    default: () => "",
    validator: (t) => ["horizontal", "vertical", ""].includes(t)
  }
};
export {
  r as Props
};
