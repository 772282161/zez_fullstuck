"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MembersPage = void 0;
var React = require("react");
var member_1 = require("../../api/member");
var memberHeader_1 = require("./memberHeader");
var memberRow_1 = require("./memberRow");
var MembersPage = /** @class */ (function (_super) {
    __extends(MembersPage, _super);
    function MembersPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            members: []
        };
        return _this;
    }
    MembersPage.prototype.componentDidMount = function () {
        var _this = this;
        member_1.memberAPI // API 模块化  组件 -》 定义去取数据的地方 
            .fetchMembers() // 异步 thenable Promise 
            .then(function (members) {
            _this.setState({
                members: members
            });
        });
    };
    MembersPage.prototype.render = function () {
        return (React.createElement("div", { className: "row" },
            React.createElement("h2", null, "Members Page"),
            React.createElement("table", { className: "table" },
                React.createElement("thead", null,
                    React.createElement(memberHeader_1.MemberHeader, null)),
                React.createElement("tbody", null, // ts 推测类型
                this.state.members.map(function (member) {
                    return React.createElement(memberRow_1.MemberRow, { key: member.id, member: member });
                })))));
    };
    return MembersPage;
}(React.Component));
exports.MembersPage = MembersPage;
