import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter, Route } from 'react-router-dom';

if (module.hot) {
  // 实现热更新
  module.hot.accept();
}

ReactDOM.render((
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
),
  document.getElementById('root')
);