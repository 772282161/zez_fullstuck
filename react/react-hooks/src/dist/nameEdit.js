"use strict";
exports.__esModule = true;
exports.NameEditComponent = void 0;
var React = require("react");
// 什么时候要写ts 什么时候容易出问题？ 类型约束
// ts 代码 @types/react 
// 有需要去ts 约束他的类型？ props 
// Function Component
// export const NameEditComponent = (props:Props) => (
exports.NameEditComponent = function (props) { return (React.createElement(React.Fragment, null,
    React.createElement("label", null, "Update name:"),
    React.createElement("input", { value: props.userName, onChange: props.onChange }))); };
