"use strict";
exports.__esModule = true;
exports.MemberRow = void 0;
// ts props 约束
var React = require("react");
exports.MemberRow = function (_a) {
    var member = _a.member;
    return (React.createElement("tr", null,
        React.createElement("td", null,
            React.createElement("img", { src: member.avatar_url, className: "avatar" })),
        React.createElement("td", null,
            React.createElement("span", null, member.id)),
        React.createElement("td", null,
            React.createElement("span", null, member.login))));
};
