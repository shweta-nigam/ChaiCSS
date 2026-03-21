import { applyChaiStyles } from "./applyStyle.js";

export function runChai() {
  const elements = document.querySelectorAll("*");

  elements.forEach(el => {
    applyChaiStyles(el);
  });
}

window.ChaiCSS = { runChai };  // Expose engine globally so anyone can run it manually
// this file run styling system on the entire page