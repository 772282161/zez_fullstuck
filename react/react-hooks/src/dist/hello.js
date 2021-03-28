"use strict";
// tsx  jsx 组件
// .tsx -> main.ts 加载的路上 
// webpack  index.tsx -> hello.tsx .tsx -> modules -> awesome-typescript-loader
// -> typescript-> tsconfig.json  -> jsx  -> babel-core-> .babelrc -> es5 
exports.__esModule = true;
exports.HelloComponent = void 0;
var React = require("react");
// ts 加类型
//约束组件类型的写法  泛型<> 
exports.HelloComponent = function (props) { return (
// export const HelloComponent = (props:Props) => (
React.createElement("h2", null,
    "Hello user: ",
    props.userName)
// <>
//     <label>Update name:</label>
//     <input value={props.userName} onChange={props.onChange} />
// </>
); };
