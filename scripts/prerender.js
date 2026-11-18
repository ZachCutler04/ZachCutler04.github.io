// Renders the React app to static HTML and injects it into build/index.html,
// so crawlers that don't run JavaScript still see the bio and publications.
// Runs automatically after `yarn build` (the "postbuild" script).
process.env.NODE_ENV = "production";
process.env.BABEL_ENV = "test"; // babel-preset-react-app's node/commonjs target

const fs = require("fs");
const path = require("path");
const Module = require("module");
const babel = require("@babel/core");

const srcDir = path.resolve(__dirname, "../src");

// Compile our TS/TSX on require; ignore stylesheet imports (CSS is in the build).
for (const ext of [".ts", ".tsx"]) {
  Module._extensions[ext] = (mod, filename) => {
    const { code } = babel.transformFileSync(filename, {
      presets: [require.resolve("babel-preset-react-app")],
      babelrc: false,
      configFile: false,
    });
    mod._compile(code, filename);
  };
}
Module._extensions[".css"] = () => {};

const React = require("react");
const { renderToString } = require("react-dom/server");
const { App } = require(path.join(srcDir, "App.tsx"));

const html = renderToString(
  React.createElement(React.StrictMode, null, React.createElement(App)),
);

const indexPath = path.resolve(__dirname, "../build/index.html");
const index = fs.readFileSync(indexPath, "utf8");
const marker = /<div id="root"([^>]*)><\/div>/;
if (!marker.test(index)) {
  throw new Error("prerender: empty #root not found in build/index.html");
}
fs.writeFileSync(
  indexPath,
  index.replace(marker, (_, attrs) => `<div id="root"${attrs}>${html}</div>`),
);
console.log(`prerender: wrote ${html.length} chars of HTML into build/index.html`);
