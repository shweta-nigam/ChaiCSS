import { parseChaiClass } from "./parser.js";

export function applyChaiStyles(element) {
  if (!element.className) return;

  const classes = element.className.trim().split(/\s+/);

  const chaiClasses = classes.filter((cls) => cls.startsWith("chai-"));

  if (chaiClasses.length === 0) return;

  chaiClasses.forEach((cls) => {
    const styles = parseChaiClass(cls);

    if (!styles || !Object.keys(styles).length) return;

    for (let key in styles) {
      if (styles[key] != null) {
        element.style[key] = styles[key];
      }
    }

    element.classList.remove(cls);
  });
}

// this file finds chai- classes on an element, converts them into styles, and applies them