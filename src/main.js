import { runChai } from "./engine.js";
import { applyChaiStyles } from "./applyStyle.js";

document.addEventListener("DOMContentLoaded", () => {
  runChai();
});

const observer = new MutationObserver((mutations) => { //watcher for changes in DOM
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === 1) {
        applyChaiStyles(node);
      }
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// this is the starter(when page load - style everything) and auto updater(when new elements are added - style it)
//Watch the entire page for new elements