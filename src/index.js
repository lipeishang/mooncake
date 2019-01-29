import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

if (module.hot) {
  // 实现热更新
  module.hot.accept();
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);