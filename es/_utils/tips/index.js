const n = (r, o) => {
  console.warn(`[vm-design/${r}]: ${o}`);
}, e = (r, o) => {
  console.error(`[vm-design/${r}]: ${o}`);
}, s = (r, o) => {
  throw new Error(`[vm-design/${r}]: ${o}`);
};
export {
  e as error,
  s as throwError,
  n as warning
};
