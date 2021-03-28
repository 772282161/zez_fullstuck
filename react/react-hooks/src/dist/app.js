"use strict";
exports.__esModule = true;
exports.App = void 0;
var React = require("react");
var hello_1 = require("./hello");
var nameEdit_1 = require("./nameEdit");
// class App extends Component {
//   constructor() {
//     this.state = {
//     }
//   }
//   render() {
//     return (
//     )
//   }
// }
// StatelessComponent
exports.App = function () {
    // React hooks name 状态的名字， setName 修改状态用setName 
    //共享状态
    var _a = React.useState('defaultUserName'), name = _a[0], setName = _a[1]; // state 
    // react hooks 
    // 函数式组件可以借助一些魔法函数来实现状态 
    // class  .bind  this    最高级的地方
    //ts 帮助我们在开发阶段就可以避免很多错误
    // JS 因为太随意， bad  pattern   The good parts  The bad parts
    // ts 还可以像java 一样代码提示
    var setUsernameState = function (event) {
        setName(event.target.value);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(hello_1.HelloComponent, { userName: name }),
        React.createElement(nameEdit_1.NameEditComponent, { userName: name, onChange: setUsernameState })));
};
