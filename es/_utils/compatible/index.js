import "vue";
const i = (e) => {
  if (typeof e != "object" || e === null)
    return [];
  if (Object.entries && Object.entries !== void 0)
    return Object.entries(e);
  const r = [];
  for (const t in e)
    Object.prototype.hasOwnProperty.call(e, t) && r.push([t, e[t]]);
  return r;
};
export {
  i as objectEntries
};
