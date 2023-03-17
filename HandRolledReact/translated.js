import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.querySelector("#root"));
//const h1 = React.createElement("h1", null, "Hello, HandRolledReact");
const div = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Webpack Config"), /*#__PURE__*/React.createElement("h2", null, "Sahi hai"));
root.render(div);
