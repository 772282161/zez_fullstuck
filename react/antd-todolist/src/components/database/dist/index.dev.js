"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCollection = loadCollection;
exports.db = void 0;

var _lokijs = _interopRequireDefault(require("lokijs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 数据业务 模块化
// js database  localStore IndexDB 封装库
// db  数据库句柄  notes 数据库名字
var db = new _lokijs["default"]('notes', {
  // 链接数据库
  autoload: true,
  autoloadCallback: databaseInitialize,
  // 第一次链接 执行的回调函数
  autosave: true,
  autosaveInterval: 3000,
  //自动保存
  persistenceMethod: 'localStorage' // 持久化 localStorage

});
exports.db = db;

function databaseInitialize() {
  //
  var notes = db.getCollection('notes'); //有 notes 数据表吗？ collections table

  if (notes === null) {
    db.addCollection('notes'); // 添加一个表 notes
  }
}

function loadCollection(collection) {
  // 打开表
  return new Promise(function (resolve) {
    db.loadDatabase({}, function () {
      var _collection = db.getCollection(collection) || db.addCollection(collection);

      resolve(_collection);
    });
  });
}