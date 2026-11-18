import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root") as HTMLElement;
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The production build is prerendered (scripts/prerender.js), so hydrate the
// existing markup when it's there; in dev the root is empty, so render fresh.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
