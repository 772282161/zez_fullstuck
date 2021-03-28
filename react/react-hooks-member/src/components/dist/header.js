"use strict";
exports.__esModule = true;
exports.Header = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
exports.Header = function () {
    return (React.createElement("div", { className: "row col-12" },
        React.createElement("nav", { className: "navbar navbar-expand-lg navbar-light bg-white", id: "navbar" },
            React.createElement("a", { className: "navbar-brand", href: "#" }, "Lemoncode"),
            React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                React.createElement("span", { className: "navbar-toggler-icon" })),
            React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                React.createElement("ul", { className: "navbar-nav mr-auto" },
                    React.createElement("li", { className: "nav-item" },
                        React.createElement(react_router_dom_1.Link, { className: "nav-link", to: "/about" }, "About")),
                    React.createElement("li", { className: "nav-item " },
                        React.createElement(react_router_dom_1.Link, { className: "nav-link", to: "/members" }, "Members")))))));
};
