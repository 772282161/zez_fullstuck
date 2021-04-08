// 一切服务都可以是插件  koa 好用，但简单，满足不了大型项目大人开发
// 有一个大家公认的约定更好
// 只要配一下，就立马可以用

'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize:{
    enable:true,
    package:'egg-sequelize'
  }
};
