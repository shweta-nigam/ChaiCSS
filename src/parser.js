export function parseChaiClass(cls) {
  const clean = cls.replace("chai-", "");
  const parts = clean.split("-");

  const type = parts[0];
  const value = parts[1];

  const colors = {
    red: "#ef4444",
    blue: "#3b82f6",
    green: "#22c55e",
    yellow: "#eab308",
    black: "#000000",
    white: "#ffffff",
    gray: "#6b7280"
  };

  const styleMap = {
    // SPACING
    p: (v) => ({ padding: v + "px" }),
    pt: (v) => ({ paddingTop: v + "px" }),
    pb: (v) => ({ paddingBottom: v + "px" }),
    pl: (v) => ({ paddingLeft: v + "px" }),
    pr: (v) => ({ paddingRight: v + "px" }),

    m: (v) => ({ margin: v + "px" }),
    mt: (v) => ({ marginTop: v + "px" }),
    mb: (v) => ({ marginBottom: v + "px" }),
    ml: (v) => ({ marginLeft: v + "px" }),
    mr: (v) => ({ marginRight: v + "px" }),

    px: (v) => ({ paddingLeft: v + "px", paddingRight: v + "px" }),
    py: (v) => ({ paddingTop: v + "px", paddingBottom: v + "px" }),
    mx: (v) => ({ marginLeft: v + "px", marginRight: v + "px" }),
    my: (v) => ({ marginTop: v + "px", marginBottom: v + "px" }),

    // COLORS
    bg: (v) => ({ backgroundColor: colors[v] || v }),
    text: (v) => ({ color: colors[v] || v }),

    // BORDER
    rounded: (v) => ({ borderRadius: v + "px" }),
    border: (v) => {
      if (parts[2]) {
        return {
          borderWidth: v + "px",
          borderColor: colors[parts[2]] || parts[2],
          borderStyle: "solid"
        };
      }
      if (v === "none") {
        return { border: "none" };
      }
      return { borderWidth: v + "px", borderStyle: "solid" };
    },

    // SIZE
    w: (v) => {
      if (v === "full") return { width: "100%" };
      return { width: v + "px" };
    },
    h: (v) => {
      if (v === "screen") return { height: "100vh" };
      return { height: v + "px" };
    },

    // FONT
    fs: (v) => ({ fontSize: v + "px" }),
    fw: (v) => ({ fontWeight: v }),
    lh: (v) => ({ lineHeight: v }),
    ls: (v) => ({ letterSpacing: v + "px" }),

    // DISPLAY
    flex: () => ({ display: "flex" }),
    block: () => ({ display: "block" }),
    inline: () => ({ display: "inline" }),
    hidden: () => ({ display: "none" }),

    gap: (v) => ({ gap: v + "px" }),
    z: (v) => ({ zIndex: v })
  };

  // direct match
  if (styleMap[type]) {
    return styleMap[type](value);
  }

  // TEXT ALIGN + FONT WEIGHT
  if (type === "text") {
    if (value === "center") return { textAlign: "center" };
    if (value === "left") return { textAlign: "left" };
    if (value === "right") return { textAlign: "right" };
    if (value === "bold") return { fontWeight: "bold" };
  }

  // FLEX ALIGNMENT
  if (type === "items") {
    if (value === "center") return { alignItems: "center" };
    if (value === "start") return { alignItems: "flex-start" };
    if (value === "end") return { alignItems: "flex-end" };
  }

  if (type === "justify") {
    if (value === "center") return { justifyContent: "center" };
    if (value === "between") return { justifyContent: "space-between" };
    if (value === "around") return { justifyContent: "space-around" };
  }

  // FLEX DIRECTION & WRAP
  if (type === "flex") {
    if (value === "col") return { flexDirection: "column" };
    if (value === "row") return { flexDirection: "row" };
    if (value === "wrap") return { flexWrap: "wrap" };
  }

  // POSITION
  if (type === "pos") {
    if (value === "relative") return { position: "relative" };
    if (value === "absolute") return { position: "absolute" };
    if (value === "fixed") return { position: "fixed" };
  }

  // POSITION OFFSETS
  if (["top", "left", "right", "bottom"].includes(type)) {
    return { [type]: value + "px" };
  }

  // SHADOW
  if (type === "shadow") {
    if (value === "sm") return { boxShadow: "0 1px 3px rgba(0,0,0,0.1)" };
    if (value === "lg") return { boxShadow: "0 10px 20px rgba(0,0,0,0.2)" };
    return { boxShadow: "0 4px 10px rgba(0,0,0,0.1)" };
  }

  // OVERFLOW
  if (type === "overflow") {
    return { overflow: value };
  }

  // CURSOR
  if (type === "cursor") {
    return { cursor: value };
  }

  // TRANSITION
  if (type === "transition") {
    return { transition: "all 0.3s ease" };
  }

  return {};
}