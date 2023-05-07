const h = (o) => {
  if (!/^\#?[0-9A-Fa-f]{6}$/.test(o))
    throw new Error(
      `vm Design - useColor: ${o} is not a valid hex color number`
    );
  const n = () => {
    const t = o.replace("#", "").match(/../g);
    for (let e = 0; e < t.length; e++)
      t[e] = parseInt(t[e], 16).toString();
    return t;
  }, g = (...r) => {
    const t = [...r];
    for (let e = 0; e < t.length; e++)
      t[e].length === 1 && (t[e] = "0" + t[e]);
    return "#" + t.join("");
  };
  return {
    getDark: (r = 0) => {
      const t = n();
      for (let e = 0; e < t.length; e++)
        t[e] = Math.floor(Number(t[e]) * (1 - r)).toString(16);
      return g(...t);
    },
    getLight: (r = 0) => {
      const t = n();
      for (let e = 0; e < t.length; e++)
        t[e] = Math.floor((255 - Number(t[e])) * r + Number(t[e])).toString(16);
      return g(...t);
    }
  };
};
export {
  h as useColor
};
