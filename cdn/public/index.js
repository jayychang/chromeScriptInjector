import container from "./components/container.js";

// injector
(() => {
  console.log("injected");

  document.querySelector("body").appendChild(container);
})();
