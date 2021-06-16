## ESLint
代码规范检查工具,保证代码的编写质量
$ npm run lint:create

> 20170811@0.1.0 lint:create D:\code\test\20170811
> eslint --init

? How would you like to configure ESLint? Answer questions about your style // 以问答的形式创建配置文件
? Are you using ECMAScript 6 features? Yes      // 是否校验 Es6 语法
? Are you using ES6 modules? Yes                // 是否校验 Es6 模块语法
? Where will your code run? Browser             // 代码运行环境，Browser 指浏览器
? Do you use CommonJS? Yes                      // 是否校验 CommonJs 语法
? Do you use JSX? Yes                           // 是否校验 JSX 语法
? Do you use React? Yes                         // 是否校验 React 语法
? What style of indentation do you use? Tabs    // 首行空白选择 Tab 键还是 Space
? What quotes do you use for strings? Double    // 字符串使用单引号 'string' 还是双引号 "string"
? What line endings do you use? Windows         // 操作系统
? Do you require semicolons? Yes                // 每行代码结尾是否校验加分号 ;
? What format do you want your config file to be in? JavaScript     // 以 .js 格式生成配置文件
Installing eslint-plugin-react@latest           // 因为要校验 Reac 语法，所以这里需要下载一个 React 语法规则的包

## vuex
vuex 是一个专为Vue.js应用程序开发的  状态管理模式。采用集中式存储管理应用的所有组件的状态，
并以响应的规则保证状态以一种可预测的方式发生变化
Vuex使用单一状态树：用一个对象就包含了全部的应用层级状态。作为一个“唯一数据源”存在
- state    
- getters
- actions
- mutations
- modules


